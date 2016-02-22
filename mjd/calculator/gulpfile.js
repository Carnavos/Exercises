'use strict';

const gulp = require('gulp');
const jshint = require('gulp-jshint');
const watch = require('gulp-watch');
const jasmine = require('gulp-jasmine');

gulp.task('default', ['lint', 'watch']);

gulp.task('jasmine', () =>
	gulp.src('spec/test.js')
		// gulp-jasmine works on filepaths so you can't have any plugins before it 
		.pipe(jasmine())
);

gulp.task('watch', function() {
  gulp.watch('./javascripts/**/*.js', ['lint']);
});


gulp.task('lint', function() {
  return gulp.src('./javascripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

