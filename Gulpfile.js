'use strict';

var gulp = require('gulp');
var _ = require('lodash');
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

gulp.task('default', ['set']);
