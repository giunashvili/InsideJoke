<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    /**
     * Add polymorphic relationship to images.
     * 
     * @return Image
     */
    public function image()
    {
        return $this -> morphOne(Image :: class, 'imageable');
    }
}
