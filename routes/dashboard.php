<?php

use App\Http\Controllers\JournalistController;
use App\Http\Controllers\SectionController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
  Route::resource('journalists', JournalistController::class)
    ->except('show');

  Route::resource('sections', SectionController::class)
    ->only(['index', 'create', 'store', 'update', 'destroy']);
});
