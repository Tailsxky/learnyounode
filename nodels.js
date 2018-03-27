var fs = require('fs');
var path = require('path');


fs.readdir(process.argv[2],'utf-8',function(err,files){
    if(err){
        throw err;
    }
    files.forEach(function(file){
        if(path.extname(file) === '.' + process.argv[3]){
            console.log(file);
        }
    })
    
});