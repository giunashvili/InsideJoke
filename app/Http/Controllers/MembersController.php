<?php

namespace App\Http\Controllers;

use App\Models\Member;

class MembersController extends Controller
{ 
    public function index()
    {
        return view('pages.members.index') -> with("members", Member::all());
    }
}
?>