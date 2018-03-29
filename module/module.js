var fs = require('fs');
var path = require('path');

var modulejs = function(setPath, setExtname,callback){
    fs.readdir(setPath,'utf-8',function(err,files){
        if(err){
            return callback(err);
        }
        files = files.filter(function(file){
           
                return path.extname(file) === '.' + setExtname;
            
        });

        callback(null,files);
        });
    };

    

module.exports = modulejs;
