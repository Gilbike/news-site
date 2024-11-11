<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\JournalistController;
use App\Http\Controllers\RssFeedController;
use App\Http\Controllers\SectionController;
use App\Models\Article;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [ArticleController::class, 'index'])->name('home');

Route::get('/rss', [RssFeedController::class, 'index'])
    ->name('rss');

Route::get('/dashboard', [DashboardController::class, 'index'])
    ->middleware('auth')
    ->name('dashboard');

Route::get('/article/create', [ArticleController::class, 'create'])
    ->middleware('auth')
    ->name('article.create');

Route::post('/article/create', [ArticleController::class, 'store'])
    ->middleware('auth')
    ->name('article.store');

Route::get('/article/{article}/edit', [ArticleController::class, 'edit'])
    ->middleware('auth')
    ->name('article.edit');

Route::patch('/article/{article}/edit', [ArticleController::class, 'update'])
    ->middleware('auth')
    ->name('article.update');

Route::delete('/article/{article}', [ArticleController::class, 'destroy'])
    ->middleware('auth')
    ->name('article.destroy');

Route::get('/author/{journalist:name}', [JournalistController::class, 'show'])
    ->name('author');

require __DIR__ . '/auth.php';
require __DIR__ . '/dashboard.php';

Route::get('/{section:name}', [SectionController::class, 'show']);
Route::get('/{section:name}/{article:slug}', [ArticleController::class, 'show'])
    ->middleware('published');

Route::get('/{section:name}/{article:slug}/draft', [ArticleController::class, 'show'])
    ->middleware('auth')
    ->name('article.draft');

Route::post('/{section:name}/{article:slug}/publish', [ArticleController::class, 'publish'])
    ->middleware(['auth', 'editor'])
    ->name('article.publish');