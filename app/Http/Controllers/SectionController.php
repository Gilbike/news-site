<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSectionRequest;
use App\Http\Requests\UpdateSectionRequest;
use App\Models\Section;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class SectionController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware('editor', only: ['create', 'destroy']),
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $orderDir = $request->query('dir', 'asc');

        $sections = Section::orderBy('name', $orderDir)->get();

        return inertia('Dashboard/Sections/Index', ["sections" => $sections]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Dashboard/Sections/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSectionRequest $request)
    {
        $validated = $request->validated();

        Section::create($validated);

        return redirect()->route('sections.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Section $section)
    {
        $articles = $section->articles()->get();

        return inertia('Section', ['sectionName' => $section->name, 'articles' => $articles]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSectionRequest $request, Section $section)
    {
        $validated = $request->validated();

        $section->update($validated);

        return redirect()->route('sections.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Section $section)
    {
        $section->delete();
    }
}
