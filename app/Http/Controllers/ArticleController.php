<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\Section;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::orderBy('created_at', 'desc')->get();

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
}
