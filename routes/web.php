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

    return view('register');
});

Route::get('/members', function () {
    
    $group_members = Member::all();

    return view('pages.members.index') -> with("members", $group_members);
});
# Social Links Route
Route::get('/social-links', function () {

    $social_links = SocialLink::all();

    return view('pages.social_links.index') -> with('social_links', $social_links);

});
