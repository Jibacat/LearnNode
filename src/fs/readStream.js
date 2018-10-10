var fs = require('fs');

var readStream = fs.createReadStream(__dirname + '/assets/readFile.txt', 'utf8');
readStream
    .on('data', function(chunk) {
        console.log('读取' + chunk);
    })
    .on('error', function(err) {
        console.error('错误', err.message);
    })
    .on('end', function() {
        console.log('no data');
    })
    .on('close', function() {
        console.log('have been close');
    })
