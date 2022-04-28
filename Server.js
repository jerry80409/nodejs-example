let http = require('http');
const PORT = 8888;

function start() {
  function onRequest(request, response) {
    console.log('Request received.');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello world');
    response.end();
  }

  http.createServer(onRequest).listen(PORT);
  console.log('Server has started.');
}

exports.start = start;

