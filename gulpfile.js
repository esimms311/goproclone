var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var nodemailer = require('nodemailer');

const paths = {
  scssSource: './public/styles/**/*.scss',
  scssDest: './public/compiled/styles',
  jsSource: ['./public/js/app.js', './public/js/**/*.js'],
  jsDest: './public/compiled/js'
};
