var multer = require("multer");
var express = require("express");
var app = express();

var upload = multer({dest: 'uploads/'});

app.post('/minutes/upload', upload.single('minutes'), function(form, res, next) {
	//form.file = file
	//form.body = other text submitted
});

app.post('/photos/upload', upload.single('photos'), function(form, res, next) {
	//form.file = file
	//form.body = other text submitted
});