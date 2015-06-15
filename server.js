var development = process.env.NODE_ENV !== 'production';
var express = require('express');
var React = require('react');
var path = require('path');
var browserify = require('connect-browserify');
var Bacon = require('baconjs');
require('node-jsx').install({harmony: true});
var Context = require('./context');

var port = 8080;
var server = express();
server.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
server.set('view engine', 'ejs');
var Application = React.createFactory(require('./client'));

server.disable('x-powered-by');

server.get('/app.js', function(req, res) {
    res.sendFile(path.resolve(__dirname, './app.js'));
});

server.use('/common', express.static(__dirname + '/common'));

server.get('/', function(req, res) {
  res.render('index.ejs', {reactOutput: React.renderToString(Context(Application))});
});

server.listen(port);
console.log("Server running on port", port);
