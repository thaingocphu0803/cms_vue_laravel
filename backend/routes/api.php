<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Symfony\Component\Routing\Router;

Route::controller(AuthController::class)->group(function(){
    Route::post('login', 'login');
});

Route::controller(UserController::class)->prefix('user')->middleware('auth:sanctum')->group(function(){
    Route::get('me', 'me');
});
