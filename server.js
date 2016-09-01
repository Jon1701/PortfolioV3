// ExpressJS.
var express = require('express');
var app = express();

// API endpoint to get the hostname of the server.
app.post('/email', function(req, res) {
  console.log(req)
  return res.json("response")
});

// Root folder. Serve index.html.
app.use(express.static('dist'));
app.get('/', function(req, res) {
  res.render(__dirname + '/dist/index.html');
});

// Listen on port 8080.
app.listen(8080, function() {
  console.log('Listening for connections on PORT 8080');
});
