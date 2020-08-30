<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model 
{
  /**
   * Protected guard attribute for mass assignment.
   * 
   * @var array
   */
  protected $guarded = [];

  /**
   * Disable laravel default timestamps.
   * 
   * @var bool
   */
  public $timestamps = false;

  /**
   * Polymorphic relationship.
   */
  public function imageable()
  {
    return $this -> morphTo();
  }
}