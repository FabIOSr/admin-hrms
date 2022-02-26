const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .sass('resources/sass/toastr.scss', 'public/assets/css')
    .styles([
        'resources/assets/css/bootstrap.min.css',
        'resources/assets/css/font-awesome.min.css',
        'resources/assets/css/line-awesome.min.css',
    ], 'public/assets/css/bundle.min.css')
    .styles('resources/assets/css/dataTables.bootstrap4.min.css', 'public/assets/css/dataTables.bootstrap4.min.css')
    .styles('resources/assets/css/select2.min.css', 'public/assets/css/select2.min.css')
    .styles('resources/assets/css/bootstrap-datetimepicker.min.css', 'public/assets/css/bootstrap-datetimepicker.min.css')
    
    .styles('resources/assets/css/style.css', 'public/assets/css/style.css')

    .scripts([
        'resources/assets/js/jquery-3.5.1.min.js',
        'resources/assets/js/popper.min.js',
        'resources/assets/js/bootstrap.min.js',
        'resources/assets/js/jquery.slimscroll.min.js',
    ], 'public/assets/js/bundle.min.js')

    .scripts('resources/assets/js/select2.min.js', 'public/assets/js/select2.min.js')
    .scripts('resources/assets/js/moment.min.js', 'public/assets/js/moment.min.js')
    .scripts('resources/assets/js/bootstrap-datetimepicker.min.js', 'public/assets/js/bootstrap-datetimepicker.min.js')
    .scripts('resources/assets/js/jquery.dataTables.min.js', 'public/assets/js/jquery.dataTables.min.js')
    .scripts('resources/assets/js/dataTables.bootstrap4.min.js', 'public/assets/js/dataTables.bootstrap4.min.js')
    .scripts('resources/assets/js/app.js', 'public/assets/js/app.js')
    .copyDirectory('resources/assets/fonts/', 'public/assets/fonts')
    .copyDirectory('resources/assets/img/', 'public/assets/img')
    .js('resources/js/app.js', 'public/js') 

    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    .options({
        processCssUrls:false
    });
