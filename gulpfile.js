// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass        = require('gulp-sass');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var minifyCSS   = require('gulp-minify-css');
var plumber     = require('gulp-plumber');
var notify      = require('gulp-notify');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        ghostMode: false,
        port: 1410
    });
});

// Compile Sass to Css
gulp.task('sass', function () {
  gulp.src('./UI/scss/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Sass error: <%= error.message %>")}))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({stream: true}));
});

// Compile Sass
gulp.task('sass-min', function () {
  gulp.src('./UI/scss/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Sass error: <%= error.message %>")}))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src([
        'UI/js/*',
      ])
      .pipe(plumber({errorHandler: notify.onError("Scripts error: <%= error.message %>")}))
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest('./dist/js'))
      .pipe(reload({stream: true}));
});

// Concatenate & Minify JS
gulp.task('scripts-min', function() {
    return gulp.src([
        'UI/js/*',
      ])
      .pipe(concat('app.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('UI/js/*.js', ['scripts']);
    gulp.watch('UI/scss/**/*.scss', ['sass']);
});

// Default Task
gulp.task('build', ['sass-min', 'scripts-min']);
gulp.task('run', ['sass', 'scripts', 'watch', 'browser-sync']);
