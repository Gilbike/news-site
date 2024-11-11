<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class RssFeedController extends Controller
{
    public function index()
    {
        $articles = Article::latest()
            ->with(['Section:id,name', 'author:id,firstname,lastname'])
            ->where('published', '=', true)
            ->limit(10)
            ->get(['title', 'small_summary', 'slug', 'created_at', 'journalist_id', 'section_id']);

        $xml = view('rss', [
            'title' => 'News-Site Latest',
            'articles' => $articles,
        ]);


        return response($xml)
            ->header('Content-Type', 'application/xml');
    }
}
