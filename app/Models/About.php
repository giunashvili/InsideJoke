<?php

namespace App\Models;

use App\Traits\ImageEntities;
use Illuminate\Database\Eloquent\Model;

class About extends Model
{
    use ImageEntities;

    /**
     * Table attribute.
     * 
     * @var string
     */
    protected $table = 'about';

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
     * Format about record.
     * 
     * @param self $about
     * @return void
     */
    public static function format( self &$about ):void
    {
        unset($about->id);
        unset($about->created_at);
        unset($about->updated_at);

        $about->img = null;

        if($about->image)
        {
          $about->img = $about->image->path;  
        }

        unset($about->image);
    }
}
