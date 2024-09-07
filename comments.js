// Create a web server
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


