/* 
    压缩
*/

var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var inFile = fs.createReadStream(__dirname + '/assets/text.txt');
var out = fs.createWriteStream(__dirname + '/out/text.txt.gz');

inFile.pipe(gzip).pipe(out);