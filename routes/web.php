<?php

use App\Models\Article;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $articles = Article::orderBy('created_at', 'desc')->get();

    return Inertia::render('Home', ['articles' => $articles]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
require __DIR__ . '/dashboard.php';
