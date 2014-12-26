/************************************************************
 * DEPENDENCIES
 ************************************************************/

var gulp         = require( 'gulp' ),
    watch        = require( 'gulp-watch' ),
    concat       = require( 'gulp-concat' ),
    connect      = require( 'gulp-connect' ),
    uglify       = require( 'gulp-uglify' ),
    file_include = require( 'gulp-file-include' ),
    del          = require( 'del' ),
    ncp          = require( 'ncp' ).ncp,
    compass      = require( 'gulp-compass' );





/************************************************************
 * FOLDERS ROUTES
 ************************************************************/

// Root
var root_dir   = './';

// Partials
var partials_dir  = 'partials';

// Assets
var images_dir   = 'assets/images',
    scss_dir     = 'assets/scss';

// Build
var js_build_dir      = 'build/js',
    css_build_dir     = 'build/css',
    images_build_dir  = 'build/images';





/************************************************************
 * FILES
 ************************************************************/

var js_files           = 'assets/js/**/*.js',
    scss_files         = 'assets/scss/**/*.scss',
    images_files       = 'assets/images/*',
    images_build_files = 'build/images/**/*',
    html_files         = [ './*.html', './partials/*.html' ];




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


// Scripts
gulp.task( 'scripts', function() {

  return gulp.src( js_files )
  .pipe( concat( 'main.js' ) )
  .pipe( uglify() )
  .pipe( gulp.dest( js_build_dir ) );

} );


// Compass
gulp.task ( 'compass', function() {

  gulp.src( 'assets/scss/application.scss' )
  .pipe( compass ( { 
      config_file : './config.rb',
      css         : css_build_dir,
      sass        : scss_dir
  }) )
  .pipe( gulp.dest( css_build_dir ) );

} );


// Images ( To copy from assets folder to build folder destination )
gulp.task( 'images', function() { 

  del( images_build_dir, function() {
    ncp( images_dir, images_build_dir );
  } );

} );


// File include
gulp.task('fileinclude', function() {

  gulp.src( [ './*.html' ] )
  .pipe( file_include ( {

    prefix: '@@',
    basepath: '@file',
  }))
  .pipe(gulp.dest( 'build' ) );

});


// Default
gulp.task( 'default', [ 'connect' ], function() {

  gulp.watch( js_files, [ 'scripts' ] );
  gulp.watch( scss_files, [ 'compass' ] );
  gulp.watch( images_files, [ 'images' ] );
  gulp.watch( html_files, [ 'fileinclude' ] );
  
} );
