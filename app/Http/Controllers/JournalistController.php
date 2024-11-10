<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use DB;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class JournalistController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware('editor', only: ['create', 'edit', 'update', 'destroy']),
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $orderBy = $request->query('ord', 'id');
        $orderDir = $request->query('dir', 'asc');

        $journalists = User::orderBy($orderBy, $orderDir)->get();

        return inertia("Dashboard/Journalists/Index", [
            "journalists" => $journalists,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Dashboard/Journalists/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request)
    {
        $validated = $request->validated();

        $newID = DB::table("users")->latest()->first()->id + 1;
        $isNameDuplicated = DB::table("users")->where(["firstname" => $validated["firstname"], "lastname" => $validated["lastname"]])->exists();

        $username = strtolower($validated["firstname"] . '.' . $validated["lastname"]);

        if ($isNameDuplicated) {
            $username .= '.' . $newID;
        }

        $validated["name"] = $username;
        $validated["email"] = $username . "@news.com";
        $validated["password"] = $validated["lastname"];

        User::create($validated);

        return redirect()->route('journalists.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $journalist)
    {
        $articles = $journalist
            ->articles()
            ->with('Section')
            ->paginate(15);

        return inertia('Author', ['journalist' => $journalist->only('firstname', 'lastname'), 'articles' => $articles]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $journalist)
    {
        return inertia('Dashboard/Journalists/Edit', ['journalist' => $journalist]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $journalist)
    {
        $validated = $request->validate([
            "title" => '',
            "editor" => ''
        ]);

        foreach ($validated as $key => $value) {
            $journalist->$key = $value;
        }

        $journalist->save();

        return redirect()->route('journalists.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, User $journalist)
    {
        if ($journalist->is($request->user())) {
            abort(403);
        }

        $journalist->delete();
    }
}
