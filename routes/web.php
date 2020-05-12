<?php

use Illuminate\Support\Facades\Route;

use App\Member;
use App\SocialLink;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('register', function () {
    return view('pages.register.register');
}) -> name ('register');

Route::get('login', function () {
    return view('pages.login.login');
}) -> name ('login');

Route::get('social_links', function () {
    $social_links = SocialLink::all();
    return view('pages.social_links.index') -> with('social_links', $social_links);
}) -> name ('soclinks');

Route::group(['prefix' => 'admin'], function(){
    
    Route::get('members', function () {
        $group_members = Member::all();
        return view('pages.members.index') -> with("members", $group_members);
    })  -> name ('members');

    Route::get('dashboard', function () {
        return view('pages.dashboard');
    })  -> name ('dashboard');

    Route::get('social_links', function () {
        $social_links = SocialLink::all();
        return view('pages.social_links.soclinks_dashboard') -> with('social_links', $social_links);
    })  -> name ('admin/soclinks');

});