<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\User;
use DB;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class JournalistController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware('editor', only: ['create']),
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia("Dashboard/Journalists/Index", [
            "journalists" => User::all()
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
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
