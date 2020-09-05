<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;

class AuthController extends Controller
{ 
    public function register()
    {
        return view('pages.register.register');
    }
    public function login()
    {
        return view('pages.login.login');
    }
}