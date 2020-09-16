<?php

namespace App\Models;

use App\Traits\ImageEntities;
use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{
    use ImageEntities;

    /**
     * Protected guard attribute for mass assignment.
     * 
     * @var array
    */
    protected $guarded = [];

    /**
     * Assign formatted shorthand links to social links collection.
     * 
     * @param Collection $socialLinks
     * @return void
     */
    public static function assignFormattedShortLink( &$socialLinks )
    {
        $socialLinks && $socialLinks -> each( function( $socialLink ) {
            if(strlen($socialLink -> link ) > 41){
                $socialLink -> linkshortened = substr($socialLink -> link, 0, 40) . "...";
            }
            else{
                $socialLink -> linkshortened = $socialLink -> link;
            }
        });
    }
    
    /**
     * Map image relationship path as attribute.
     * 
     * @param Collection $socialLinks
     * @return void
     */
    public static function formatWithImage( &$socialLinks )
    {
        $socialLinks && $socialLinks -> each( function( $socialLink ) {
            $socialLink -> img = null;
            $socialLink -> image && $socialLink -> img = $socialLink -> image -> path;
            unset($socialLink -> image);
        });
    }

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
