<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Section;
use Illuminate\Http\Request;
use Str;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::orderBy('created_at', 'desc')->with('Section')->get();

        return inertia('Home', ['articles' => $articles]);
    }

    public function show(Section $section, Article $article)
    {
        return inertia('Article', [
            'article' => $article,
            'section' => $section,
            'author' => $article->author()->first(['name', 'firstname', 'lastname', 'title'])
        ]);
    }

    public function create()
    {
        $sections = Section::all();

        return inertia('Article/Create', ['sections' => $sections]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:50|unique:articles',
            'section_id' => 'required|exists:sections,id',
            'small_summary' => 'required|max:300',
            'large_summary' => 'string|max:500'
        ]);

        $section = Section::find($validated['section_id']);

        $validated['journalist_id'] = $request->user()->id;
        $validated['slug'] = Str::slug($validated['title']);

        $section->articles()->create($validated);

        return redirect()->route('dashboard');
    }

    public function edit(Article $article)
    {
        return inertia('Article/Edit', ['article' => $article]);
    }

    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => "required|max:50|unique:articles,title,$article->id",
            'slug' => 'required',
            'small_summary' => 'required|max:300',
            'large_summary' => 'string|max:500'
        ]);

        $asd = $validated['slug'];


        $validated['slug'] = Str::slug($validated['slug']);

        $article->update($validated);

        return $asd;
    }
}
