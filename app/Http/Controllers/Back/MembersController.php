<?php

namespace App\Http\Controllers\Back;

use App\Http\Controllers\Controller;
use App\Models\Member;

class MembersController extends Controller
{ 
    public function index()
    {
        return view('pages.members.index') -> with("members", Member::all());
    }
}
?>