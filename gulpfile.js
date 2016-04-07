
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var prefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var filter = require('gulp-filter');
var clean = require('gulp-clean');
var inject = require('gulp-inject');
var karma = require('karma').server;



var options = {
    // JADE
    JADE_SOURCE     : "./app/views/**/*.jade",
    JADE_DEST       : "./public",

    // SASS / CSS
    SASS_SOURCE     : "./app/styles/**/*.scss",
    SASS_DEST       : "./public/css",

    // JavaScript
    JS_SOURCE       : "./app/scripts/**/*.js",
    JS_DEST     : "./public/js",

    DIST_DEST       : "./public",

};

// Clean
gulp.task('clean', function () {
  return gulp.src(options.DIST_DEST)
        .pipe(clean());
});

//Compile Jade & inject css & js
gulp.task('jade',['sass','js'],function () {
  return gulp.src(options.JADE_SOURCE)
        .pipe(jade({pretty:true}))
        .pipe(inject(gulp.src(['**/*.css', '**/*.js'],{read:false, cwd: options.DIST_DEST}), {addRootSlash: true}))
        .pipe(gulp.dest(options.JADE_DEST));
});

// Compile Our Sass & Minify CSS
gulp.task('sass', function() {
    return gulp.src([options.SASS_SOURCE, "./app/bower_components/skeleton/**/skeleton.css", "./app/bower_components/normalize.css/*.css"])
        .pipe(sass({sourcemap: true}))
        .pipe(prefix())
        .pipe(minifyCSS())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(options.SASS_DEST));
});

// Concatenate & Minify JavaScript
gulp.task('js', function() {
    return gulp.src(options.JS_SOURCE)
        // .pipe(jshint())
        // .pipe(jshint.reporter('jshint-stylish'))
        // .pipe(jshint.reporter('fail'))
        .pipe(concat('app.js'))
        .pipe(rename('app.js'))
        // .pipe(uglify())
        .pipe(gulp.dest(options.JS_DEST));
});


// Watch Files For Changes, defualt task
gulp.task('default', [], function () {
    gulp.watch(options.SASS_SOURCE, ['sass']);
    gulp.watch(options.JS_SOURCE, ['js']);
    gulp.watch(options.JADE_SOURCE, ['jade']);
});

//run karma test for front end
gulp.task('karma', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

// Build Task build for distribution
gulp.task('build', ['clean'], function () {
    return gulp.start('sass', 'jade', 'js');
});
