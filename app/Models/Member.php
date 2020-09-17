<?php

namespace App\Models;

use App\Traits\ImageEntities;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use ImageEntities;

    /**
     * Guard attribute.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * Add polymorphic relationship to images.
     * 
     * @return Image
     */
    public function image()
    {
        return $this -> morphOne(Image :: class, 'imageable');
    }

    /**
     * Map image relationship path as attribute.
     * 
     * @param Collection $members
     * @return void
     */
    public static function formatWithImage( &$members )
    {
        $members && $members -> each( function( $member ) {
            $member -> img = null;
            $member -> image && $member -> img = $member -> image -> path;
            unset($member -> image);
        });
    }
}
