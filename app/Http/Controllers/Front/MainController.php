<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;

use App\Models\About;
use App\Models\Member;
use App\Models\SocialLink;

class MainController extends Controller
{ 
    public function __invoke()
    {
      $about = About::with('image')->first();
      About::format($about);

      $socialLinks = SocialLink::with('image')->get();
      SocialLink::formatWithImage($socialLinks);

      $members = Member::with('image')->get();
      Member::formatWithImage($members);
      Member::assignRandomDegrees($members);

      $colors = [
        '#EB5757',
        '#9B51E0',
        '#2D9CDB',
        '#828282',
        '#333333',
      ];

      $circleSizes = [
        230,
        400,
        570,
        740,
        910,
      ];

      return view('pages.landing')
        ->with('about',$about)
        ->with('social_links', $socialLinks)
        ->with('members', $members)
        ->with('circleSizes', $circleSizes)
        ->with('colors', $colors);
    }
}