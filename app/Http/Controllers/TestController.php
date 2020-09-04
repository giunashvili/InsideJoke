<?php

namespace App\Http\Controllers;

use App\Helpers\Image;

class TestController extends Controller
{
  function __invoke()
  {
    return view('test.upload-image'); 
  }
}