var fs = require('fs');

// fs.exist 已废弃，但是fs.existSync仍然可以使用.
// fs.access 也可以判断有无访问该文件的权限。

fs.access(__dirname + '/assets/readFile.txt', function(err) {
    if(err) throw err;
    console.log('存在')
})