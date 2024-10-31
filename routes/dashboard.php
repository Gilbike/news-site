<?php

use App\Http\Controllers\JournalistController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SectionController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
  // Profile page
  Route::get('/journalists/profile', [ProfileController::class, 'show'])
    ->name('profile');

  Route::patch('/journalists/profile', [ProfileController::class, 'update'])
    ->name('profile.update');

  Route::resource('journalists', JournalistController::class)
    ->except('show');

  Route::resource('sections', SectionController::class)
    ->only(['index', 'create', 'store', 'update', 'destroy']);
});
