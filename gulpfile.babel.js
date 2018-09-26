/************************************************************
 * DEPENDENCIES
 ************************************************************/

import  gulp         from 'gulp';
import  connect      from 'gulp-connect';
import  sass         from 'gulp-sass';
import  autoprefixer from'gulp-autoprefixer';
import  babel        from 'babelify';
import  browserify   from 'browserify';
import  streamify    from 'gulp-streamify';
import  source       from 'vinyl-source-stream';
import  concat       from 'gulp-concat';
import  uglify       from 'gulp-uglify';
import  del          from 'del';
import  ncp          from 'ncp';
import  file_include from 'gulp-file-include';
import  watch        from 'gulp-watch';




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
    html_files         = [ './*.html', './partials/*.html', './layouts/*.html' ];





/************************************************************
 * TASKS
 ************************************************************/

// Webserver 
gulp.task('connect', function() {
  connect.server( {
    root       : 'build',
    port       : 3000,
    livereload : true
  });
});


// Scripts
gulp.task('scripts', function() {
  gulp.src([
    "assets/js/libs/jquery.min.js",
    // "assets/js/libs/materialize.min.js",
  ])
  .pipe(uglify())
  .pipe(concat('all-libs.js'))
  .pipe(gulp.dest( js_build_dir));

  browserify("assets/js/main.js")
  .transform(babel)
  .bundle()
  .pipe(source('main.js'))
  .pipe(streamify(uglify()))
  .pipe(gulp.dest( js_build_dir));
});


// Sass
gulp.task ('styles', function() {
  gulp
  .src('assets/scss/main.scss')
  .pipe(sass({outputStyle: 'compressed'})).on('error', sass.logError)
    .pipe(autoprefixer({
      browsers: [
        'last 2 version', 
        'ie 9', 
      ],
      cascade: false,
      grid: true
    }))
  .pipe(gulp.dest( css_build_dir));
});


// Assets folders 
gulp.task('folders', function() { 
  // Image folder
  del(images_build_dir, function() {
    ncp(images_dir, images_build_dir);
  });
  // Fonts folder
  del(fonts_build_dir, function() {
    ncp(fonts_dir, fonts_build_dir);
  });
});


// File include
gulp.task('fileinclude', function() {
  gulp.src(['./*.html'])
  .pipe( file_include ({
    prefix: '@@',
    basepath: '@file',
  }))
  .pipe(gulp.dest('build'));
});


// Default
gulp.task('default', ['connect', 'fileinclude', 'folders', 'styles', 'scripts'], function() {
  gulp.watch(js_files, ['scripts']);
  gulp.watch(scss_files, ['styles']);
  gulp.watch(html_files, ['fileinclude']);
  gulp.watch([js_files, images_files, html_files],  ['folders']);
});
