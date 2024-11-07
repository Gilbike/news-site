<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $articles = $request->user()->articles()->orderBy("created_at", "desc")->limit(10)->get();

        return inertia('Dashboard', ['articles' => $articles]);
    }
}
