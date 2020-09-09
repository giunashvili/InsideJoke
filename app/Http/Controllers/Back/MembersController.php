<?php

namespace App\Http\Controllers\Back;

use App\Http\Requests\Members\UploadImage;
use App\Http\Controllers\Controller;
use App\Models\Member;

class MembersController extends Controller
{
    /**
     * Return view with all the members.
     * 
     * @return \View
     */ 
    public function index()
    {
        return view('pages.members.index') -> with('members', Member::all());
    }

    /**
     * Find all the members.
     *
     * @return JSON
     */
    public function all()
    {
        return response() -> json(Member::all());
    }

    /**
     * Find specific member.
     * 
     * @param int $id
     * @return JSON
     */
    public function find($id)
    {
        return response() -> json(Member::findOrFail($id));
    }

    /**
     * Delete member.
     * 
     * @param int $id
     * @return JSON
     */
    public function delete($id)
    {
        $data = [
            'code' => 200,
            'status' => 'success',
        ];

        if( $member = Member::find($id))
        {
            $member->delete();
        }
        else
        {
            $data['code'] = 404;
            $data['status'] = 'failed to find and delete!';
        }

        return response() -> json($data, $data['code']);
    }

    /**
     * Upload image for members.
     * 
     * @return JSON
     */
    public function uploadImage(UploadImage $request)
    {  
        $socialLink = Member::with('image')->find($request->id);
        $socialLink->storeImage($request->img);

        return response()->json(
            [
                'code' => 200,
                'status' => 'Image successfully submitted!',
            ]
        );
    }
}