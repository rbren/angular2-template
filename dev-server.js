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
  stats: { colors: true },
  setup: app => {
    app.use('/dist', function(req, res) {
      res.redirect('/static' + req.originalUrl);
    })
  },
});
server.listen(3000, "0.0.0.0", function() {
});
