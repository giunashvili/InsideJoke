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

      return view('pages.landing')
        ->with('about',$about)
        ->with('social_links', $socialLinks)
        ->with('members', $members);
    }
}