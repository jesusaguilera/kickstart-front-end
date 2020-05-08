/************************************************************
 * DEPENDENCIES
 ***********************************************************/

import gulp         from 'gulp';
import browserSync  from 'browser-sync';
import sass         from 'gulp-sass';
import imagemin     from 'gulp-imagemin';
import changed      from 'gulp-changed';
import runSequence  from 'run-sequence';
import removeFiles  from 'gulp-remove-files'; 
import autoprefixer from'gulp-autoprefixer';
import babel        from 'babelify';
import browserify   from 'browserify';
import streamify    from 'gulp-streamify';
import source       from 'vinyl-source-stream';
import concat       from 'gulp-concat';
import uglify       from 'gulp-uglify';
import del          from 'del';
import ncp          from 'ncp';
import file_include from 'gulp-file-include';
import watch        from 'gulp-watch';




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
  js_dir       = 'assets/js',
  js_libs_dir = 'assets/js/libs';

// temp
var js_temp_dir      = 'temp/js',
  js_libs_temp_dir  = 'temp/js/libs',
  css_temp_dir     = 'temp/css',
  fonts_temp_dir   = 'temp/fonts',
  images_temp_dir  = 'temp/images';






/************************************************************
 * FILES
 ************************************************************/

var js_files         = 'assets/js/**/*.js',
  scss_files         = 'assets/scss/**/*.scss',
  images_files       = 'assets/images/**/*',
  fonts_files        = 'assets/fonts/**/*.{ttf, woff, eot, svg}',
  html_files         = [ './**/*.html', './layouts/**/*.html', './partials/**/*.html', './components/**/*.html' ];





/************************************************************
 * TASKS
 ************************************************************/

// const server = browserSync.create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./temp"
        }
    });
});

// Webserver 
// gulp.task('connect', function() {
//   connect.server( {
//     root       : 'temp',
//     port       : 3000,
//     livereload : true
//   });
// });



// Concat Scripts
gulp.task('jslibs', function() {

  return gulp.src('assets/js/libs/**/*.js')
    .pipe(concat('all-libs.js'))
    .pipe(gulp.dest('./temp/js'));

});
gulp.task('jslibsBuild', function() {

  return gulp.src('assets/js/libs/**/*.js')
    .pipe(concat('all-libs.js'))
    .pipe(gulp.dest('./build/js'));

});

gulp.task('scripts', function() {

  browserify("assets/js/main.js")
    .transform(babel)
    .bundle()
    .pipe(source('main.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest( js_temp_dir));

});
gulp.task('scriptsBuild', function() {

  browserify("assets/js/main.js")
    .transform(babel)
    .bundle()
    .pipe(source('main.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('./build/js'));

});


// Compile Sass
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
    .pipe(gulp.dest( css_temp_dir));
});

gulp.task ('stylesBuild', function() {
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
    .pipe(gulp.dest('./build/css'));
});
// @Compile Sass

// Optimize images and move to temp
gulp.task('images', function() { 

  return gulp.src(`${images_dir}/**/*`)
    .pipe(changed(images_temp_dir))
    .pipe(imagemin())
    .pipe(gulp.dest(images_temp_dir));

});
gulp.task('imagesBuild', function() { 
  return gulp.src(`${images_dir}/**/*`)
    .pipe(gulp.dest('build/images'));
});


// Move fonts to temp
gulp.task('fonts', function() { 

  return gulp.src([`${fonts_dir}/**/*`])
    .pipe(gulp.dest(fonts_temp_dir));

});
gulp.task('fontsBuild', function() { 

  return gulp.src([`${fonts_dir}/**/*`])
    .pipe(gulp.dest('./build/fonts'));

});

// Assets folders 
/*
 * gulp.task('folders', function() { 
 *   // Image folder
 *   del(images_temp_dir, function() {
 *     ncp(images_dir, images_temp_dir);
 *   });
 *   // Fonts folder
 *   del(fonts_temp_dir, function() {
 *     ncp(fonts_dir, fonts_temp_dir);
 *   });
 * 
 * });
 */


// Include html files
gulp.task('htmls', function() {

  return gulp.src(['./*.html'])
    .pipe( file_include ({
      prefix: '@@',
      basepath: '@file',
    }))
    .pipe(gulp.dest('temp'));

});
gulp.task('htmlsBuild', function() {

  return gulp.src(['./*.html'])
    .pipe( file_include ({
      prefix: '@@',
      basepath: '@file',
    }))
    .pipe(gulp.dest('build'));

});


gulp.task('removeTemp', function() {

  del('./temp');

});





// Default
gulp.task('default', ['fonts', 'htmls', 'images', 'styles', 'scripts', 'jslibs'], function() {

  gulp.watch(html_files, ['htmls', 'images']);
  gulp.watch(fonts_files,  ['fonts']);
  gulp.watch(images_files, ['images']);
  gulp.watch(scss_files, ['styles']);
  gulp.watch(js_files, ['scripts', 'jslibs']);
  // gulp.watch([js_files, images_files, html_files, fonts_files],  ['folders']);

  browserSync.init({
        server: {
            baseDir: "./temp"
        }
  });
});


gulp.task('build', ['fontsBuild', 'htmlsBuild', 'imagesBuild', 'stylesBuild', 'scriptsBuild', 'jslibsBuild', 'removeTemp'])
