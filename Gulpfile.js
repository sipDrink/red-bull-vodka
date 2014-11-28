'use strict';

var gulp = require('gulp');
var _ = require('lodash');
var jsDoc = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');
var localVars;

// try to load up local vars
try {
  localVars = require('./api/config/local');
} catch(e) {
  localVars = {};
}

gulp.task('set', function() {
  _.forEach(localVars, function(val, name) {
    process.env[name] = val;
  });
});

gulp.task('document', function() {
  return gulp.src(['index.js','api/**/*.js', 'config/**/*.js'])
    .pipe(concat('doc.md'))
    .pipe(jsDoc())
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(gulp.dest('documentation/'));
});

gulp.task('default', ['set']);
