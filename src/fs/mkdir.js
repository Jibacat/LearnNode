var fs = require('fs');

fs.mkdir(__dirname + '/assets/mkdir', function(err) {
    if(err) throw err;
    console.log('目录创建成功');
})

try {
    fs.mkdirSync(__dirname + '/assets/mkdirSync')
    console.log('创建成功')
} catch(err) {
    throw err;
}
