<?php

namespace App\Utils;

class Helper
{
  /**
   * Determine if the environment is 
   * in development mode.
   * 
   * @return boolean
   */
  static function isDev(): bool 
  {
    return config('app.env') === 'local';
  }
};