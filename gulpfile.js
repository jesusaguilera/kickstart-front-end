/************************************************************
 * DEPENDENCIES
 ************************************************************/

var gulp         = require( 'gulp' ),
    watch        = require( 'gulp-watch' ),
    concat       = require( 'gulp-concat' ),
    connect      = require( 'gulp-connect' ),
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
    json_dir     = 'assets/json';
    scss_dir     = 'assets/scss';

// Build
var js_build_dir      = 'build/js',
    json_build_dir     = 'build/json',
    css_build_dir     = 'build/css',
    images_build_dir  = 'build/images';





/************************************************************
 * FILES
 ************************************************************/

var depsJs = ['assets/js/libs/jquery.min.js','assets/js/libs/angular.min.js'],
    appJs = 'assets/js/main.js',
    json_files = 'assets/json/**/*.json',
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
gulp.task( 'jsLibs', function() {
  var depsjs = gulp.src(depsJs);
  return depsjs.pipe( concat( 'depsJs.js' ) )
  .pipe( gulp.dest( js_build_dir ) );
} );
gulp.task( 'jsApp', function() {
  var appjs = gulp.src(appJs);
  return appjs.pipe( concat( 'appJs.js' ) )
  .pipe( gulp.dest( js_build_dir ) );
} );


// Json 
gulp.task( 'json', function() { 
  del( json_build_dir, function() {
    ncp( json_dir, json_build_dir );
  } );
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


// Images 
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
gulp.task( 'default', [ 'connect', 'images', 'json', 'jsLibs', 'jsApp', 'compass', 'fileinclude' ], function() {

  gulp.watch( depsJs, [ 'jsLibs' ] );
  gulp.watch( appJs, [ 'jsApp' ] );
  gulp.watch( json_files, [ 'json' ] );
  gulp.watch( scss_files, [ 'compass' ] );
  gulp.watch( images_files, [ 'images' ] );
  gulp.watch( html_files, [ 'fileinclude' ] );
  
} );
