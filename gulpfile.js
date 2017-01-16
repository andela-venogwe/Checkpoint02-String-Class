const gulp = require('gulp');

const nodemon = require('gulp-nodemon');

const os = require('os');

const eslint = require('gulp-eslint');

const browserify = require('browserify');

const babelify = require('babelify');

const source = require('vinyl-source-stream');

const buffer = require('vinyl-buffer');

const rename = require('gulp-rename');

const mocha = require('gulp-mocha');

const browserSync = require('browser-sync');

const browserSyncNode = browserSync.create('nodemon');

const nodejsPort = Math.floor((Math.random() * 1000) + 3000);
/* eslint-disable no-nested-ternary */
const browser = os.platform() === 'linux' ? 'google-chrome' : (
  os.platform() === 'darwin' ? 'google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox')
);

// we'd need a slight delay to reload browsers
// connected to browser-sync after restarting nodemon
const BROWSER_SYNC_RELOAD_DELAY = 2000;

// run mocha tests
gulp.task('mocha', () =>
  gulp.src('test/tests.js', { read: false })
    .pipe(mocha())
);

// gulp jshint code testing
gulp.task('lint', () =>
  gulp.src(['./src/*.js', './test/*.js', '*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
);

// compile the es6 code to es5
gulp.task('compile', ['lint'], () =>
  browserify('./src/app.js', { debug: true })
  .transform(babelify, { presets: ['es2015'] })
  .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('public/js'))
);

// initialize the nodemon server
gulp.task('nodemon', ['compile'], (cb) => {
  /* eslint-disable strict */

  'use strict';

  let started = false;
  return nodemon({
    script: './bin/www',
    ext: 'js',
    watch: ['src', 'app.js', 'gulpfile.js'],
    tasks: ['compile'],
    env: { PORT: nodejsPort, NODE_ENV: 'development' }
  })
  .on('start', () => {
    // have nodemon run watch on start
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  })
  .on('restart', () => {
    // reload connected browsers after a slight delay
    setTimeout(() => {
      browserSyncNode.reload({
        stream: false
      });
    }, BROWSER_SYNC_RELOAD_DELAY);
  });
});

// run browsersync after nodemon runs
gulp.task('browser-sync', ['nodemon'], () =>
  browserSyncNode.init(null, {
    online: false,
    proxy: `http://localhost:${nodejsPort}`,
    browser,
    port: 4000,
    ui: {
      port: 4001
    }
  })
);

// reload browsers
gulp.task('bs-reload', () => browserSyncNode.reload());

// gulp default tasks
gulp.task('default', ['browser-sync'], () =>
  gulp.watch(
    ['views/*.pug', 'public/js/*.js', 'public/css/**.css'], ['bs-reload']
  ),
  gulp.watch(
    ['src/*.js'], ['compile']
  )
);
