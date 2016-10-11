var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var compiler = webpack(require('./webpack.config'));

var server = new WebpackDevServer(compiler, {
  contentBase: 'static/',
  historyApiFallback: {
    rewrites: [{from: /^\/$/, to: '/index.html'}],
  },
  stats: { colors: true },
});
server.listen(3000, "0.0.0.0", function() {
});
