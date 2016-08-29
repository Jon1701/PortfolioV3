////////////////////////////////////////////////////////////////////////////////
// Modules
////////////////////////////////////////////////////////////////////////////////
var gulp = require('gulp');             // Gulp.
var connect = require('gulp-connect');  // Webserver.
var webpack = require('webpack-stream');// Webpack.

////////////////////////////////////////////////////////////////////////////////
// Paths
////////////////////////////////////////////////////////////////////////////////
var srcPath = './src/';
var destPath = './dist/';
var modulesPath = './node_modules/';

// JSX
gulp.task('webpack', function() {
    webpack({
      watch: true,
      entry: srcPath + 'js/index.jsx',
      module: {
        loaders: [

          // Begin Babel loader.
          {
            test: /\.jsx$/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          },
          // End Babel Loader.

          // Begin SASS loader.
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          },
          // End SASS loader.
        ]
      },
      output: {
        filename: 'app.js'
      }
    })
    .pipe(gulp.dest(destPath + 'js/'))
    .pipe(connect.reload());
});

// Move .html.
gulp.task('html', function() {
  gulp.src(srcPath + '*.html')
    .pipe(gulp.dest(destPath))
    .pipe(connect.reload());
});

////////////////////////////////////////////////////////////////////////////////
// Webserver
////////////////////////////////////////////////////////////////////////////////
gulp.task("webserver", function() {

  connect.server({
    root: destPath,
    livereload: true,
    port: 8080
  })

});

////////////////////////////////////////////////////////////////////////////////
// Watch task
////////////////////////////////////////////////////////////////////////////////
gulp.task('watch', function() {
  gulp.watch(srcPath + '*.html', ['html']);
});

////////////////////////////////////////////////////////////////////////////////
// Default task
////////////////////////////////////////////////////////////////////////////////
gulp.task('default', ['webserver', 'watch', 'webpack', 'html']);
