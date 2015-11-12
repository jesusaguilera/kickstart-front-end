# KickStart for Front-end development

KickStart for optimising your front-end development and building quickly static web pages through [**gulpjs**](http://gulpjs.com/) and [**bootstrap-sass**](https://github.com/twbs/bootstrap-sass).

Using gulpjs you can take advantage of the nodejs syntax and nodejs streams, developing your front-end more quickly and easily than using another task runner like [**gruntjs**](http://gruntjs.com/), in addition you won't need to use any back-end language, so you will only use front-end languages like html, sass and javascript ;)

### Gulpfile.js
```javascript
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
    scss_dir     = 'assets/scss',
    fonts_dir    = 'assets/fonts',
    js_dir       = 'assets/js';

// Build
var js_build_dir      = 'build/js',
    css_build_dir     = 'build/css',
    fonts_build_dir   = 'build/fonts',
    images_build_dir  = 'build/images';





/************************************************************
 * FILES
 ************************************************************/

var js_files           = 'assets/js/**/*.js',
    js_build_files     = 'build/js/**/*',
    scss_files         = 'assets/scss/**/*.scss',
    images_files       = 'assets/images/**/*',
    images_build_files = 'build/images/**/*',
    fonts_files        = 'assets/fonts/**/*',
    fonts_build_files  = 'build/fonts/**/*',
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
  return gulp.src([
    // Here we set an order for include our js files in all.js, 
    // You only need to add here your js files instead of index.html like <script src="your/file/route">
    "assets/js/libs/jquery.min.js",
    "assets/js/main.js"
  ])
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest( js_build_dir));
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


// Assets folders 
gulp.task( 'folders', function() { 
  del( images_build_dir, function() {
    ncp( images_dir, images_build_dir );
  } );
  del( fonts_build_dir, function() {
    ncp( fonts_dir, fonts_build_dir );
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
gulp.task( 'default', [ 'connect', 'fileinclude', 'folders', 'compass', 'scripts' ], function() {
  gulp.watch( js_files, [ 'scripts' ] );
  gulp.watch( scss_files, [ 'compass' ] );
  gulp.watch( html_files, [ 'fileinclude' ] );
  gulp.watch( [js_files, images_files, html_files],  [ 'folders' ] );
} );
```
