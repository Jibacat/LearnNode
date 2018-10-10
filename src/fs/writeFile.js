var fs = require('fs');

// 写入文件是吧文件里的内容清空，再把字符串传入。

fs.writeFile(__dirname + '/assets/writeFile.txt','hello world', 'utf-8', function (err) {
    if(err) throw err;
    console.log('文件写入成功')
});

try {
    fs.writeFileSync(__dirname + '/assets/writeFile.txt', 'Hi wcq', 'utf-8')
    console.log('写入成功')
} catch(err) {
    throw err;
}
