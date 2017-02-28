const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'hello.txt'),
{ encoding:'utf8'},
function(err,data){
  if (err) console.error('Error!');
  process.cwd();
  console.log("ファイル内容は以下の通り")
  console.log(data);
}
);
