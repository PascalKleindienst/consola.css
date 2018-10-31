var gulp    = require('gulp');
var sass    = require('gulp-sass');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-minify-css');
var prefix  = require('gulp-autoprefixer');
var size    = require('gulp-size');
var header  = require('gulp-header');
var tildeImporter = require('node-sass-tilde-importer');


var pkg = require('./package.json');
var banner = ['/**',
              ' * <%= pkg.name %> - <%= pkg.description %>',
              ' * @author <%= pkg.author %>',
              ' * @version v<%= pkg.version %>',
              ' * @link <%= pkg.homepage %>',
              ' * @license <%= pkg.license %>',
              ' */\n\n'].join('\n');

gulp.task('scss', function() {
  return gulp.src('scss/consola.scss')
    .pipe(sass({
      importer: tildeImporter
    }))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(prefix({browsers: ['last 2 versions', 'Android >= 4']}))
    .pipe(rename('consola.css'))
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('css'))
    .pipe(cssmin({ keepSpecialComments: 0 }))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(header('/*! <%= pkg.name %> v<%= pkg.version %> | <%= pkg.author %> | <%= pkg.license %> | <%= pkg.homepage %> */\n', { pkg: pkg }))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch(['scss/*.scss'], ['scss']);
});

gulp.task('default', ['scss']);