<?php

namespace App\Http\Controllers;

use App\Member;

class MembersController extends Controller
{ 
    public function index()
    {
        $group_members = Member::all() -> toArray();
        return view('pages.members.index') 
            -> with("members", $group_members);
    }
}
?>