const fs = require('fs');
const process = require('process');

// read file at path and print out.
function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err){
        console.log('Error reading ${path}: ${err}');
        process.exit(1);
    } else {
        console.log(data);
    }
  });
}