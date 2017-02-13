const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  SRC: path.resolve(__dirname, 'client/'),
  DEST: path.resolve(__dirname, 'dist/'),
};

const config = {
  devtool: 'source-map',

  entry: [
    path.resolve(PATHS.SRC, 'index.jsx'),
  ],

  output: {
    path: PATHS.DEST,
    filename: 'app.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: path.join(PATHS.SRC, 'actions/'),
      reducers: path.join(PATHS.SRC, 'reducers/'),
      components: path.join(PATHS.SRC, 'components/'),
      containers: path.join(PATHS.SRC, 'containers/'),
      stylesheets: path.join(PATHS.SRC, 'stylesheets/'),
      json: path.join(PATHS.SRC, 'media/data/'),
      images: path.join(PATHS.SRC, 'media/images/'),
      config: path.join(PATHS.SRC, 'config/'),
      common: path.join(PATHS.SRC, 'common/'),
    },
  },

  module: {
    loaders: [
      // Transpile JSX, ES6, and ES7 to ES5.
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'es2016', 'es2017'],
          cacheDirectory: true,
        },
      },

      // Load stylesheets.
      {
        test: /\.(scss|css)$/i,
        loaders: ['style', 'css', 'postcss', 'sass'],
      },

      // Images.
      {
        test: /\.(jpe?g|gif|png)$/i,
        loader: 'file-loader?name=/media/images/[hash].[ext]',
      },

      // JSON files.
      {
        test: /\.json$/i,
        loader: 'json-loader?name=/media/data/[hash].[ext]',
      },

      // Fonts.
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=50000',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      mobile: true,
      inject: false,
      title: '<Not set in webpack.prod.config.json>',
      appMountId: 'react-target',
      template: require('html-webpack-template'),
      filename: 'index.html',
    }),
  ],
};

module.exports = config;
