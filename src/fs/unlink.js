var fs = require('fs');

fs.unlink(__dirname + '/assets/writeFile.txt', function(err) {
    if(err) throw err;
    console.log('删除成功')
})
try {
    fs.unlinkSync(__dirname + '/assets/writeFile.txt')
    console.log('删除成功22')
} catch(err) {
    throw err;
}
