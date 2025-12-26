<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Trait\HandleResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\JsonResponse;

class UserController extends Controller
{
    use HandleResponse;

    public function __construct() {}

    public function me()
    {
        $user = Auth::user();

        $user = Auth::user()->only(['name', 'email']);
        $data['user'] = $user;
        $message = 'Retrieved user successfully';
        return $this->jsonResponse($message, JsonResponse::HTTP_OK, $data);
    }
}
