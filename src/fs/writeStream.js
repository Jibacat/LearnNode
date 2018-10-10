var fs = require('fs');

var writeStream = fs.createWriteStream(__dirname + '/assets/writeFile.txt', 'utf-8');

writeStream.on('close', function() {
    console.log('已关闭')
});

writeStream.write('hello');
writeStream.write('world');
writeStream.end('!')