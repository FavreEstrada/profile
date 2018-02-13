const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: ['./src/app.tsx', './src/main.scss', ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  /*
   * resolve lets Webpack now in advance what file extensions you plan on
   * "require"ing into the web application, and allows you to drop them
   * in your code.
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      /*{
            test: /\.js$/, // include .js files
            enforce: "pre", // preload the jshint loader
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            use: [{
              loader: "jshint-loader",
              options: {
                camelcase: true,
                emitErrors: false,
                failOnHint: false,
                esversion: 6
              }
            }]
          },*/
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.(sass|scss)$/,
        include: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'src/'),
          path.resolve(__dirname, 'bootstrap/scss')
        ],
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          // use: 'css-loader!sass-loader'
          use: [{
            loader: 'css-loader', // translates CSS into CommonJS modules
          }, {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function() { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          }, {
            loader: 'sass-loader' // compiles Sass to CSS
          }]
        })
        // include : [paths.src]
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      }, {
        test: /\.exec\.js$/,
        use: ['script-loader']
      }, {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ]
};

module.exports = config;