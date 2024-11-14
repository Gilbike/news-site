<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $articles = $request->user()->articles()->orderBy("created_at", "desc")->limit(10)->get();

        $props = [
            'articles' => $articles,
        ];

        if ($request->user()->editor) {
            $draftArticles = Article::where('published', false)->orderBy('created_at', 'desc')
                ->with('Section:id,name,slug')
                ->limit(10)
                ->get([
                    'id',
                    'title',
                    'slug',
                    'section_id'
                ]);

            $props['drafts'] = $draftArticles;
        }

        return inertia('Dashboard', $props);
    }
}
