var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const FONT_OPTS = 'name=fonts/[name].[ext]&outputPath=dist/&publicPath=../';
module.exports = {
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/main"
  },
  output: {
    path: __dirname + '/static',
    filename: "dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader?interpolate=true',
    }, {
      test: /\.js$/,
      loader: 'babel-loader?presets[]=es2015',
    }, {
      test: /\.ts/,
      loaders: ['ts-loader'],
      exclude: /node_modules\/(?!ng2-bootstrap)/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: "css-loader"}),
    }, {
      test: /\.pug$/,
      loader: ['raw-loader', 'pug-html-loader?doctype=html&plugins=pug-plugin-ng'],
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&' + FONT_OPTS
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=application/octet-stream&' + FONT_OPTS
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?' + FONT_OPTS
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml&' + FONT_OPTS
    }]
  },
  plugins: [
    new ExtractTextPlugin({filename: "dist/[name].css"}),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
    }),
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "dist/vendor.bundle.js"}),
  ]
}
