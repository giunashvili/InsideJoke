<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialLink extends Model
{
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
                $socialLink -> link_shortened = substr($socialLink -> link, 0, 40) . "...";
            }
            else{
                $socialLink -> link_shortened = $socialLink -> link;
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

    /**
     * Delete image with it's image file.
     * 
     * @return void
     */
    public function deleteImage()
    {
        if($this->image)
        {
            $path = explode('storage',$this->image->path);
            $path = storage_path().'/app/public'.end($path);
            unlink($path);
            $this->image->delete();
        }
    }
}
