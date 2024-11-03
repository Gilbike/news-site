<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\SectionController;
use App\Models\Article;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ArticleController::class, 'index'])->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
require __DIR__ . '/dashboard.php';

Route::get('/{section:name}', [SectionController::class, 'show']);
Route::get('/{section:name}/{article:slug}', [ArticleController::class, 'show']);