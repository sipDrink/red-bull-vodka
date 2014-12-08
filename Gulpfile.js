'use strict';

var gulp = require('gulp');
var _ = require('lodash');
var jsDoc = require('gulp-jsdoc-to-markdown');
var concat = require('gulp-concat');
var mocha = require('gulp-mocha');
var doxx = require('gulp-doxx');
var localVars;

// try to load up local vars
try {
  localVars = require('./config/_local');
} catch(e) {
  localVars = {};
}

gulp.task('set', function() {
    console.log(localVars)
  _.forEach(localVars, function(val, name) {
    process.env[name] = val;
  });
});

gulp.task('docs', function() {
  return gulp.src(['index.js','api/**/*.js', 'config/**/*.js'])
    .pipe(concat('doc.md'))
    .pipe(jsDoc())
    .on('error', function(err) {
      console.log(err.message);
    })
    .pipe(gulp.dest('documentation/'));
});

gulp.task('dox', function() {
  return gulp.src(['index.js','api/**/*.js', 'config/**/*.js'])
    // .pipe(concat('doc.md'))
    .pipe(doxx({
      title: 'Sip mobile'
    }))
    .pipe(gulp.dest('documentation/'));
});

gulp.task('test', function(){
  return gulp.src(['specs/setup/**/*.js', 'specs/unit/**/*Spec.js'])
    .pipe(mocha({
    }))
    .on('end', function(){
      process.exit();
    });
});

gulp.task('default', ['set']);
