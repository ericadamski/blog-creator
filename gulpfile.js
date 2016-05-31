var gulp = require('gulp');
var gls = require('gulp-live-server');
var path = require('path');
var merge = require('merge-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var typescript = require('gulp-tsc');
var fs = require('fs');
var del = require('del');

gulp.task('serve', () => {
  var server = gls.new(path.join(__dirname, 'bin', 'www'));
  server.start();

  gulp.watch(['public/**/*.{js,css}', 'views/*.html'],
    (file) => server.notify.apply(server, [file]));

  gulp.watch(['app.js', 'routes/*.js'], (file) => server.start.bind(server));
});

gulp.task('clean', () =>
  del([
    path.join(__dirname, 'app', 'app.component.css'),
  ])
);

gulp.task('compress', ['clean'], () => {
  var css = gulp.src(path.join(__dirname, 'public', 'stylesheets', '*.css'))
    .pipe(concat('app.component.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(path.join(__dirname, 'app')));
  return css;
});

gulp.task('default', ['compress']);
