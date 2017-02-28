const fs = require('fs');
const path = require('path')
fs.writeFile(path.join(__dirname ,'hello.txt'),'lets start Node\n',
function (err) {
if(err) return console.log("Error!")
});
