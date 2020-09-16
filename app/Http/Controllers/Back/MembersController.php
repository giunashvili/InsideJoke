<?php

namespace App\Http\Controllers\Back;

use App\Models\Member;
use App\Http\Controllers\Controller;
use App\Http\Requests\Members\UploadImage;
use App\Http\Requests\Members\CreateMember;
use App\Http\Requests\Members\UpdateMember;

class MembersController extends Controller
{
    /**
     * Return view with all the members.
     * 
     * @return \View
     */ 
    public function index()
    {
        $members = Member::with('image')->get();
        Member::formatWithImage($members);

        return view('pages.members.index') -> with('members', $members);
    }

    /**
     * Create member record.
     * 
     * @return JSON
     */
    public function create(CreateMember $request)
    {
        Member::create($request->only('name','type','description'));
        return response() -> json(['success' => true], 200);
    }

    /**
     * Update member record.
     * 
     * @return JSON
     */
    public function update(UpdateMember $request)
    {
        $name = $request->get('name');
        $type = $request->get('type');
        $description = $request->get('description');

        $socialLink = Member::find($request->get('id'));

        $name && $socialLink->name = $name;
        $type && $socialLink->type = $type;
        $description && $socialLink->description = $description;
        
        $socialLink->save();

        return response()->json(['success' => true], 200);
    }

    /**
     * Find all the members.
     *
     * @return JSON
     */
    public function all()
    {
        $members = Member::with('image')->get();
        Member::formatWithImage($members);

        return response() -> json($members);
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
        $member = Member::with('image')->find($request->id);
        $member->storeImage($request->img);

        return response()->json(
            [
                'code' => 200,
                'status' => 'Image successfully submitted!',
            ]
        );
    }
}