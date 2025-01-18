// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. The comments.html file should be returned when someone visits http://localhost:3000/.

var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(path.join(__dirname, 'comments.html')).pipe(res);
}).listen(3000);
console.log('Server running at http://localhost:3000/');