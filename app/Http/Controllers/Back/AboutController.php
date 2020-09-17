<?php

namespace App\Http\Controllers\Back;

use App\Models\About;
use App\Http\Controllers\Controller;
use App\Http\Requests\About\UpdateAbout;
use App\Http\Requests\About\UploadImage;

class AboutController extends Controller
{
    /**
     * Return view with about info.
     * 
     * @return \View
     */ 
    public function index()
    {
        $about = About::with('image')->first();
        About::format($about);

        return view('pages.about.index') -> with('about', $about);
    }

    /**
     * Return about info.
     * 
     * @return \View
     */ 
    public function info()
    {
        $about = About::with('image')->first();
        About::format($about);

        return response()->json($about);
    }

    /**
     * Update about info.
     * 
     * @return JSON
     */
    public function update(UpdateAbout $request)
    {
        $description = $request->get('description');
        
        $about = About::first();

        $description && $about->description = $description;
        
        $about->save();

        return response()->json(['success' => true], 200);
    }

    /**
     * Upload image for members.
     * 
     * @return JSON
     */
    public function uploadImage(UploadImage $request)
    {  
        $member = About::with('image')->first();
        $member->storeImage($request->img);

        return response()->json(
            [
                'code' => 200,
                'status' => 'Image successfully submitted!',
            ]
        );
    }
}