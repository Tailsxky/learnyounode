var moduleTest = require('./module');

moduleTest(process.argv[2],process.argv[3],function(err,files){
    if(err){
        return console.error('There was an error:', err);
    }
    files.forEach(file => {
        console.log(file); 
    });
});