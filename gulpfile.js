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

          // Load .jsx and convert to .js through babel loader and webpack.
          {
            test: /\.jsx$/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react']
            }
          },
          // End Babel Loader.

          // Load stylesheets through webpack.
          {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass']
          },
          // End SASS loader.

          // Load fonts through webpack
          {
            test: /\.(ttf)$/,
            loader: 'url-loader?limit=100000'
          },
          // End font loader.
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
