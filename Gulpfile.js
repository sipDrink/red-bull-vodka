'use strict';

var gulp    = require('gulp'),
    _       = require('lodash'),
concat      = require('gulp-concat'),
mocha       = require('gulp-mocha'),
docco       = require('gulp-docco'),
shell       = require('gulp-shell'),
localVars;

var paths = {
  docs: [
    'index.js',
    'config/env/index.js',
    'config/env/production.js',
    'config/env/development.js',
    'config/env/testing.js',
    'config/_local.example.js',
    'config/globals.js',
    'config/pb/pbinit.js',
    'api/events.js',
    'api/createActions.js',
    'api/!(createActions.js|events.js)/*.js'
  ]
};
// try to load up local vars
try {
  localVars = require('./config/_local');
} catch(e) {
  localVars = {};
}

// set env vars for local testing
gulp.task('set', function() {
  _.forEach(localVars, function(val, name) {
    process.env[name] = val;
  });
});

// generate them docs yo
gulp.task('docco', function() {
  return gulp.src(paths.docs)
    .pipe(concat('index.js'))
    .pipe(docco({
      layout: 'parallel'
    }))
    .pipe(gulp.dest('./docs'));
});

// task to deploy docs to firebase, use with 'docco' task in the 'docs' task
gulp.task('deploy-docs', function(){
  return gulp.src('', { read: false })
    .pipe(shell([
      'firebase deploy',
      'firebase open'
    ], { cwd: 'docs'}));
});

gulp.task('docs', ['docco', 'deploy-docs']);

gulp.task('test', function(){
  return gulp.src(['specs/setup/**/*.js', 'specs/unit/**/*Spec.js'])
    .pipe(mocha({
    }))
    .once('end', function(){
      process.exit();
    });
});

gulp.task('default', ['set']);
