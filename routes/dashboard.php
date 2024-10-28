<?php

use App\Http\Controllers\JournalistController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
  Route::resource('journalists', JournalistController::class)
    ->only(['index', 'create', 'store', 'edit']);
});
