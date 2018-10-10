/*
    解压
*/

var fs = require('fs');
var zlib = require('zlib');

var unzip = zlib.createGunzip();

var inFile = fs.createReadStream(__dirname + '/out/text.txt.gz');
var out = fs.createWriteStream(__dirname + '/assets/text.txt');

inFile.pipe(unzip).pipe(out);

