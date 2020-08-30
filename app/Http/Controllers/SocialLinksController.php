<?php

namespace App\Http\Controllers;

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
        $socialLinks = SocialLink::all();
        SocialLink :: assignFormattedShortLink($socialLinks);

        return view('pages.social_links.index') -> with('socialLinks', $socialLinks);
    }

    /**
     * Find specific social link.
     * 
     * @param int $id
     * @return JSON
     */
    public function find( $id )
    {
        return response() -> json(SocialLink :: findOrFail($id));
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
    public function uploadImage($id)
    {
        $img = request() -> img;

        if( ! $img -> isValid() )
        {
            return response() -> json(
                [
                    'code'   => 422,
                    'status' => 'image is not valid!',
                ]
            );
        }

        $socialLink = SocialLink :: findOrFail($id);
        $extension  = $img -> extension();
        $name = 'Social Link - '. $id . ' - ' . now() -> timestamp . '.' . $extension;
        $img -> storeAs('social_links', $name );

        $path = storage_path('social_links/' . $name);
        $socialLink -> image() -> create([ 'path' => $path ]);

        return response() -> json(
            [
                'code' => 200,
                'status' => 'Image successfully submitted!',
            ]
        );
    }
}