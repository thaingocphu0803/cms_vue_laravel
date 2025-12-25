<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Trait\HandleResponse;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\JsonResponse;

class AuthController extends Controller
{
    use HandleResponse;

    public function __construct() {}

    public function login(LoginRequest $loginRequest)
    {
        $credentials = $loginRequest->validated();

        $rememberMe = (bool) $loginRequest->input('rememberMe');

        $auth = Auth::attempt($credentials, $rememberMe);

        if ($auth) {
            $loginRequest->session()->regenerateToken();

            $message = 'Login successfully';
            return $this->jsonResponse($message);
        }

        $message = 'Incorrect username or password';
        return  $this->jsonResponse($message, JsonResponse::HTTP_UNAUTHORIZED);
    }

    public function logout()
    {
        echo 456;
    }
}
