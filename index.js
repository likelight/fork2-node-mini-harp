var connect = require('connect');
var serveStatic = require('serve-static');
function CreateMiniHarp(path,port){
  var app = connect();
  var path1 = path || process.cwd();
  var port = port || 4000;
  app.use(function(req,res,next){
    if(req.url === "/current-time"){
	res.write((new Date()).toISOString());

    }else{
	next();
    }	
  });
  app.use(serveStatic(path1));
  app.listen(port);
  	
  console.log('serving file at'+path1);
  console.log("starting http server on http://localhost:"+port);
}

module.exports = CreateMiniHarp;
