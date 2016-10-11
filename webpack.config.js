var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: {
    "vendor": "./app/vendor",
    "app": "./app/main"
  },
  output: {
    path: __dirname,
    filename: "./static/dist/[name].bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.ts/,
      loaders: ['ts-loader'],
      exclude: /node_modules\/(?!ng2-bootstrap)/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
    }, {
      test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file?name=static/fonts/[name].[ext]"
    }]
  },
  plugins: [
    new ExtractTextPlugin("./static/dist/[name].css"),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',
      marked: 'marked',
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "./static/dist/vendor.bundle.js", Infinity),
  ]
}
