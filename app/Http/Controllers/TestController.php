<?php

namespace App\Http\Controllers;

class TestController extends Controller
{
  function __invoke()
  {
    return view('test.upload-image'); 
  }

  function getSocialLink()
  {
    return view('test.add-social-link');
  }

}