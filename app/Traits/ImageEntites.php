<?php

namespace App\Traits;

trait ImageEntities
{
  /**
   * Store image in storage and database.
   * 
   * @param $img
   * @return void
   */
  public function storeImage($img)
  {
    $this -> deleteImage();
    $name = $this -> generateImageName();
    $img -> storeAs('public/'.$this->resourceName(), $name );
    $path = '/storage'.'/'. $this->resourceName().'/'.$name;
    $this -> image() -> create([ 'path' => $path ]);
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

  /**
   * Generate image name.
   * 
   * @return string
   */
  public function generateImageName()
  {
    return $this->resourceName().'_'
      .request()->id.'_' 
      .now()->timestamp.'.' 
      .request()->img->extension();
  }

  /**
   * Get resource name.
   * 
   * @return string
   */
  private function resourceName()
  {
    $name = self::class;
    $name = explode('Models\\', $name);
    return end($name);
  }
}