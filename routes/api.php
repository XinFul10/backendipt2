<?php

use App\Http\Controllers\Api\AuthController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class,'login']);