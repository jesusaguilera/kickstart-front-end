/************************************************************
 * DEPENDENCIES
 ************************************************************/

var gulp         = require( 'gulp' ),
    watch        = require( 'gulp-watch' ),
    connect      = require( 'gulp-connect' ),
    del          = require( 'del' ),
    ncp          = require( 'ncp' ).ncp;





/************************************************************
 * FOLDERS ROUTES
 ************************************************************/



// Assets
var scss_dir     = 'assets/scss',
    images_dir   = 'assets/images';

// Build
var js_build_dir      = 'build/js',
    css_build_dir     = 'build/css',
    images_build_dir  = 'build/images';





/************************************************************
 * FILES
 ************************************************************/

var js_files           = 'assets/js/**/*.js',
    scss_files         = 'assets/scss/**/*.scss',
    images_files       = 'assets/images/**/*',
    images_build_files = 'build/images/**/*';





/************************************************************
 * TASKS
 ************************************************************/

// Webserver 
gulp.task( 'connect', function() {

  connect.server( {
    root       : 'build',
    port       : 3000,
    livereload : true
  } );

} );





// Images ( To copy from assets folder to build folder destination )
gulp.task( 'images', function() { 

  del( images_build_dir, function() {
    ncp( images_dir, images_build_dir );
  } );

} );


// Default
gulp.task( 'default', [ 'connect' ], function() {

  gulp.watch( images_files, [ 'images' ] );
  
} );
