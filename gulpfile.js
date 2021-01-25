const gulp = require('gulp');
const sass = require('gulp-sass');

const gulpUtil = require('gulp-util');
const shell = require('gulp-shell');

gulp.task('view', shell.task('eleventy'));

gulp.task('css', function() {
  return gulp.src('src/style/[^_]*.scss')
    .pipe(sass())
    .pipe(gulp.dest('site/style/'));
});

let all = () => gulp.parallel('view', 'css');

gulp.task('default', all());

gulp.task('watch', function() {
  gulp.watch('src/style/**/*.scss', gulp.parallel('css'));
  gulp.watch('.eleventy.js', gulp.parallel('view'));
  gulp.watch('src/views/**/*', gulp.parallel('view'));
});
