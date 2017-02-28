const fs = require('fs');
const ws = fs.createWriteStream('stream.txt',
{ encoding: 'utf-8'});
ws.write('line1\n');
ws.write('line2\n');
ws.end();
