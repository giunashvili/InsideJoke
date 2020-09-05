<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;

class MainController extends Controller
{ 
    public function __invoke()
    {
      return redirect() -> route( 'dashboard' );     
    }
}