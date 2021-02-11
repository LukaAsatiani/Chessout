<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChessPositionController;

Route::resource('/positions', ChessPositionController::class);

Route::get('/positions/load_p', [ChessPositionController::class, 'loadPositions']);