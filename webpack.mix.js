const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix 
    .js('resources/js/landing/index.js', 'public/assets/js/landing.js')
    .js('resources/js/members/index.js', 'public/assets/js/members.js')
    .sass('resources/sass/landing/index.scss', 'public/assets/css/landing.css');
