var http = require("http");
var url = require("url");

var server =  http.createServer(function(req,res){
    var reqUrl = url.parse(req.url,true);
    
    if(reqUrl.pathname === "/api/parsetime"){
        var data = new Date(reqUrl.query.iso);
        //console.log(typeof data);
        var hour = data.getHours();
        var minute = data.getMinutes();
        var second = data.getSeconds();
        //console.log(hour);
        var JSONdata = {
            hour: hour,
            minute: minute,
            second: second
        }
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end(JSON.stringify(JSONdata));

    }
    else if(reqUrl.pathname === '/api/unixtime'){
        var data = new Date(reqUrl.query.iso);
        var date = data.getTime();
        var JSONdata = {
            unixtime:date
        }
        res.writeHead(200,{'Content-Type': 'application/json'})
        res.end(JSON.stringify(JSONdata));
    }


 
});

server.listen(process.argv[2]);

/*
//official solution

var http = require('http')
var url = require('url')

//outside function

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

//outside function
function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  //Reg test url
  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404) //404 solution
    res.end()
  }
})
server.listen(Number(process.argv[2]))
*/