var port = 8080;
var serverUrl = "127.0.0.1";

var http = require("http");
var path = require("path");
var fs = require("fs");

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


var checkMimeType = true;

console.log("Starting web server at " + serverUrl + ":" + port);

http.createServer( function(req, res) {

	var now = new Date();
    
	var filename = req.url || "index.html";
	var ext = path.extname(filename);
	var localPath = __dirname;
	var validExtensions = {
		".html" : "text/html",
		".js": "application/javascript",
		".css": "text/css",
		".txt": "text/plain",
		".jpg": "image/jpeg",
		".gif": "image/gif",
		".png": "image/png",
		".woff": "application/font-woff",
        ".woff2": "application/font-woff2",
        "":""
	};
	var validMimeType = true;
	var mimeType = validExtensions[ext];
	if (checkMimeType) {
		validMimeType = validExtensions[ext] != undefined;
	}

	if (validMimeType) {
		localPath += filename;
		fs.exists(localPath, function(exists) {
			if(exists) {
				console.log("Serving file: " + localPath);
				getFile(localPath, res, mimeType);
			} else {
				console.log("File not found: " + localPath);
				res.writeHead(404);
				res.end();
			}
		});

	} else {
		console.log("Invalid file extension detected: " + ext + " (" + filename + ")")
	}

}).listen(port, serverUrl);

function getFile(localPath, res, mimeType) {
	fs.readFile(localPath, function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			if (mimeType != undefined) {
				res.setHeader("Content-Type", mimeType);
			}
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		}
	});
}

var qs = require('querystring');

function post(request, response) {
    if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            // use post['blah'], etc.
        });
    }
}
console.log(post.age);


app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/booking', (req, res) => {
    res.send("Thank you for contacting us.. We'll get back to you as soon as posssible!");
    console.log(req.body);
    fs.writeFile("./tmp/save.txt", JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    }); 
});

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});