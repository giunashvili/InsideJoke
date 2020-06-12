<?php

namespace App\Http\Controllers;

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
?>