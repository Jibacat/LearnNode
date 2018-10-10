var fs = require('fs');

try {
    var data = fs.readFileSync(__dirname + '/assets/readFile.txt', 'utf8'); // readFileSync 同步读取一个文件，
    console.log('The file content is :' + data);
} catch(e) {
    console.error('Can not read this file' + e.message);
}

fs.readFile(__dirname + '/assets/readFile.txt', 'utf-8', function (err, data) {  // readFile异步读取
    if(err) {
        return  console.error('Can not read this file' + e.message);
    }
    console.log('The  :' + data);
})
