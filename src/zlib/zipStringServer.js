var http = require('http');
var zlib = require('zlib');

var responseText = 'I am responsed text!'

var server = http.createServer(function(req, res) {
    var acceptEncoding = req.headers['accept-encoding'];
    if(acceptEncoding.indexOf('gzip') !== -1) {
        res.writeHead(200, {
            'Content-Encoding': 'gzip'
        });
        res.end(zlib.gzipSync(responseText)); // zlib.gzipSync() 使用Gzip压缩buffer或字符串
    } else {
        res.end(responseText);
    }
});

server.listen(3000);