var http = require("http");
var express = require('express');
var app = express();
var path = require("path");

app.use(express.static('./app'));

app.get('/', function(req, res){
	res.sendFile(path.join('index.html'));
});

app.get('/calendar.html', function(req, res){
	res.sendFile(path.join('/calendar.html'));
});

app.get('/gallery.html', function(req, res){
	res.sendFile(path.join('/gallery.html'));
});

app.get('/blog.html', function(req, res){
	res.sendFile(path.join('/blog.html'));
});

app.get('/suggestions.html', function(req, res){
	res.sendFile(path.join('/suggestions.html'));
});

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');