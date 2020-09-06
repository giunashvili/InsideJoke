<?php

namespace App\Http\Controllers\Back;

use App\Http\Requests\SocialLinks\CreateSocialLink;
use App\Http\Requests\SocialLinks\UploadImage;
use App\Http\Controllers\Controller;
use App\Models\SocialLink;

class SocialLinksController extends Controller
{   
    /**
     * Return view with all the social links.
     * 
     * @return View
     */
    public function index()
    {
        $socialLinks = SocialLink::with('image')->get();
        SocialLink::assignFormattedShortLink($socialLinks);
        SocialLink::formatWithImage($socialLinks);

        return view('pages.social_links.index') -> with('socialLinks', $socialLinks);
    }

    /**
     * Create social links record.
     * 
     * @return JSON
     */
    public function create(CreateSocialLink $request)
    {
        SocialLink::create($request->only('name','link'));
    }

    /**
     * Get all the social links.
     * 
     * @return JSON
     */
    public function all()
    {
        $socialLinks = SocialLink::with('image')->get();
        SocialLink::assignFormattedShortLink($socialLinks);
        SocialLink::formatWithImage($socialLinks);

        return response() -> json($socialLinks);
    }

    /**
     * Find specific social link.
     * 
     * @param int $id
     * @return JSON
     */
    public function find( $id )
    {
        return response() -> json(SocialLink::findOrFail($id));
    }

    /**
     * Delete social link.
     * 
     * @param int $id
     * @return JSON
     */
    public function delete( $id )
    {
        $data = [
            'code' => 200,
            'status' => 'success',
        ];

        if( $socialLink = SocialLink :: find($id))
        {
            $socialLink -> delete();
        }
        else
        {
            $data['code'] = 404;
            $data['status'] = 'failed to find and delete!';
        }

        return response() -> json($data, $data['code']);
    }

    /**
     * Upload image for social links.
     * 
     * @return JSON
     */
    public function uploadImage(UploadImage $request)
    {  
        $id         = $request->id;
        $img        = $request->img;
        $socialLink = SocialLink::with('image')->find($id);
        $socialLink -> deleteImage();
        $name       = $this -> generateImageName();
        $img -> storeAs('public/social_links', $name );

        $path       = '/storage/social_links/' . $name;
        $socialLink -> image() -> create([ 'path' => $path ]);

        return response() -> json(
            [
                'code' => 200,
                'status' => 'Image successfully submitted!',
            ]
        );
    }

    /**
     * Generate image name.
     * 
     * @return string
     */
    private function generateImageName()
    {
        return 'Social Link - '. request() -> id . ' - ' . now() -> timestamp . '.' . request() -> img -> extension();
    }
}