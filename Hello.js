var http = require('http');
var dt=require('./DateAndTime');
var fs=require('fs')
var content;

http.createServer(function (req, res) {
  fs.readFile('FRDTemplate.doc',function(err,data){
    res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(data);
     content=data;
     res.end();
  });
  fs.appendFile('myText.txt',"content",function(err){
    if (err) {
      throw err;
    }
    console.log("File Sharing ");
  });
  fs.open("myText1.pdf",'w',function(err,file){
    if (err) {
      throw err;
    }
    console.log(" Save open fiel ");
  });
}).listen(55555);
