var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/static'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
var index = fs.readFileSync(__dirname + '/static/index.html', 'utf8');
app.get('*', function(req, res) {
  res.send(index);
})
app.listen(3000);
