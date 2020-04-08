<?php

use Illuminate\Support\Facades\Route;
use App\Member;

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

Route::get('/members', function () {
    
    $jgufis_wevrebi = Member::all();

    return view('pages.members.index') -> with("datvebi", $jgufis_wevrebi);
});
