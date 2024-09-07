// Create a web server that listens on port 3000 and returns a response with the text "Hello, this is a comment" when it receives a request to the /comments URL. The server should return a 404 Not Found response for all other URLs.
function createServer() {
    var server = http.createServer(function (req, res) {
        if (req.url === '/comments') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, this is a comment');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    });
    return server;
}


