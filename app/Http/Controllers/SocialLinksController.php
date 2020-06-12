<?php

namespace App\Http\Controllers;

use App\SocialLink;

class SocialLinksController extends Controller
{ 
    public function index()
    {
        $social_links = SocialLink::all() -> toArray();

        for( $i=0; $i < count ($social_links); $i++ )
        {
            if(strlen($social_links[$i]['link']) > 41){
                $social_links[$i]['link_shortened'] = substr($social_links[$i]['link'], 0, 40) . "...";
            }
            else{
                $social_links[$i]['link_shortened'] = $social_links[$i]['link'];
            }
        }
        return view('pages.social_links.index') 
            -> with('social_links', $social_links);
    
    }
}
?>