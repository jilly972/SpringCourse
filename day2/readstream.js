const fs = require('fs');
const rs = fs.createReadStream('stream.txt',{encoding:"utf-8"});
rs.on('data', function(data) {
  concole.log('data >>>'+ data.replace('\n','\\n'));
});
rs.on('end', function() {concole.log(">>> END")});
