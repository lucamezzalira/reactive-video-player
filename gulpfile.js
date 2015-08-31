var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
  browserify({
    entries: 'src/App.js',
    extensions: ['.js'],
    debug: false
  })
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('bin'));
});

gulp.task('styles', function () {
  return gulp.src('css/**/*.css')
      .pipe(gulp.dest('bin/css'))
});

gulp.task('images', function () {
  return gulp.src('images/**/*.*')
      .pipe(gulp.dest('bin/images'))
});

gulp.task('watchJS', function() {
  gulp.watch("src/**/*.js", ['build', 'styles', 'images']);
});

gulp.task('default', ['watchJS', 'build', 'styles', 'images']);
