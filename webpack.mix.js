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

mix.react('resources/js/app.js', 'public/js')
  .react('resources/js/react/App.js','public/js/react')
   .sass('resources/sass/app.scss', 'public/css')
   .sass('resources/sass/custom.scss','public/css');

mix.js('resources/js/backend.js','public/js');
mix.react('resources/js/react/RestaurantListing.js','public/js/react');
// backend assets
mix.sass('resources/sass/backend/app.scss', 'public/css/backend');
