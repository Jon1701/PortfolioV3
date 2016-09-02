'use strict'

////////////////////////////////////////////////////////////////////////////////
// Modules
////////////////////////////////////////////////////////////////////////////////
var gulp = require('gulp');             // Gulp.
var uglify = require('gulp-uglify');    // Gulp uglify.
var connect = require('gulp-connect');  // Webserver.
var sass = require('gulp-sass');        // SASS.
var webpack = require('webpack-stream');// Webpack.
var nodemon = require('gulp-nodemon');  // Nodemon.
var minifycss = require('gulp-clean-css');  // Minify css.
var path = require('path');

////////////////////////////////////////////////////////////////////////////////
// Paths
////////////////////////////////////////////////////////////////////////////////
var srcPath = './src/';
var destPath = './dist/';
var modulesPath = './node_modules/';

// JSX
gulp.task('jsx', function() {
  gulp.src(srcPath + 'js/index.jsx')
    .pipe(webpack({
      resolve: {
        root: [
          path.resolve('./src/data')
        ]
      },
      watch: true,
      module: {
        loaders: [
          {
            test: /\.jsx$/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      output: {
        filename: 'app.js'
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest(destPath + 'js/'))
    .pipe(connect.reload());
});

// Move media.
gulp.task('media', function() {
  gulp.src(srcPath + 'media/**/*')
    .pipe(gulp.dest(destPath + 'media/'))
    .pipe(connect.reload());
});

// Compile .scss and move.
gulp.task('stylesheets', function() {
  gulp.src(srcPath + 'css/**/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifycss())
    .pipe(gulp.dest(destPath + 'css/'))
    .pipe(connect.reload());
});

// Move .html.
gulp.task('html', function() {
  gulp.src(srcPath + '*.html')
    .pipe(gulp.dest(destPath))
    .pipe(connect.reload());
});

// Move portfolio projects.
gulp.task('portfolio', function() {
  gulp.src(srcPath + 'portfolio/**/*')
    .pipe(gulp.dest(destPath + 'portfolio/'))
    .pipe(connect.reload());
});

////////////////////////////////////////////////////////////////////////////////
// Webserver
////////////////////////////////////////////////////////////////////////////////
gulp.task("webserver", function() {

  connect.server({
    root: 'dist',
    livereload: true,
    port: 8080
  })

});

gulp.task("nodeserver", function() {
  nodemon({
    script: './server.js'
  })
});

////////////////////////////////////////////////////////////////////////////////
// Watch task
////////////////////////////////////////////////////////////////////////////////
gulp.task('watch', function() {
  gulp.watch(srcPath + 'js/**/*.jsx', ['jsx']); // JSX files.
  gulp.watch(srcPath + 'css/**/*.scss', ['stylesheets']); // SASS Main.
  gulp.watch(srcPath + 'css/**/_*.scss', ['stylesheets']); // SASS Partials.
  gulp.watch(srcPath + '*.html', ['html']);
});

////////////////////////////////////////////////////////////////////////////////
// Default task
////////////////////////////////////////////////////////////////////////////////
gulp.task('default', ['webserver', 'watch', 'jsx', 'media', 'stylesheets', 'html' ,'portfolio']);
