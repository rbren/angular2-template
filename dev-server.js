var WebpackDevServer = require("webpack-dev-server");
var express = require('express');
var webpack = require("webpack");

var compiler = webpack(require('./webpack.config'));

var server = new WebpackDevServer(compiler, {
  contentBase: 'static/',
  historyApiFallback: {
    rewrites: [
      {from: /^\/$/, to: '/index.html'}
    ],
  },
  setup: function(app) {
    app.use('/node_modules', express.static(__dirname + '/node_modules'));
    app.use('/dist', function(req, res) {
      res.redirect('/static' + req.originalUrl);
    })
  },

  stats: { colors: true },
});
server.listen(3000, "0.0.0.0", function() {
});
