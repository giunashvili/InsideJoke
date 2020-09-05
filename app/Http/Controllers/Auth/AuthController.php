<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{ 
    /**
     * Get register page.
     * 
     * @return \View
     */
    public function getRegister()
    {
        return view('pages.register');
    }

    /**
     * Get login page.
     * 
     * @return \View
     */
    public function getLogin()
    {
        return view('pages.auth.login');
    }

    /**
     * Attempt authenticating.
     * 
     * @return \View
     */
    public function login()
    {
        $credentials = request()->only('name', 'password');

        if (Auth::attempt($credentials)) {
            return redirect()-> route('dashboard');
        }

        return redirect() -> route('login.view');
    }

    /**
     * Logout user.
     * 
     * @return \View
     */
    public function logout()
    {
        Auth :: logout();
        return redirect() -> route('login.view');
    }
}