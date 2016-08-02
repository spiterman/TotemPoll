var gulp = require('gulp');
var sass = require('gulp-sass');
var rimraf = require('rimraf');
var sequence = require('run-sequence');

var paths = {
  styles: ['client/styles/*.scss']
};

gulp.task('clean', function(cb){
  rimraf('./client/build', cb);
});

gulp.task('build-css', function(){
  return gulp.src(paths.styles)
    .pipe(sass())
    .pipe(gulp.dest('client/build/styles'));
});

gulp.task('build', function(cb){
  sequence('clean', ['build-css'], cb);
});



gulp.task('default', ['build'], function(){
  gulp.watch('client/styles/*.scss', ['build-css']);
});
