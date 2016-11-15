var gulp = require('gulp');
var sass = require('gulp-sass');
var rimraf = require('rimraf');
var sequence = require('run-sequence');
var cleanCSS = require('gulp-clean-css');

var paths = {
  styles: ['client/styles/*.scss'],
  scripts: []
};

gulp.task('clean', function(cb){
  rimraf('./client/build', cb);
});

gulp.task('build-min-js', function(){
  return gulp.src(paths.scripts)
    .pipe(gulp.dest('./client/build/scripts'));
});

gulp.task('build-min-css', function(){ //Must run anytime SCSS is updated
  return gulp.src(paths.styles) //SCSS files
    .pipe(sass()) //Uses Sass Module
    .pipe(cleanCSS({compatibility: 'ie8'})) //Minifies CSS here
    .pipe(gulp.dest('./client/build/styles')); //Sets destination
});

gulp.task('build', function(cb){
  sequence('clean', ['build-min-css'], cb);
});



gulp.task('default', ['build'], function(){
  gulp.watch('client/styles/*.scss', ['build-min-css']);
});
