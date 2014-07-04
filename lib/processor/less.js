var less = require("less");
var fs = require("fs");
var path = require("path");

function makeLess(root) {
  return function(req, res, next) {
  	var lessFile = "";
  	var basename = path.basename(req.url, '.css');
  	var extname = path.extname(req.url);
  	var filename = root + req.url;

  	if (extname === ".css")
  	  lessFile = root + "/" + basename + ".less";

  	fs.readFile(filename, {encoding: "utf8"}, function(err, data){
  	  if (err) {
  	  	fs.readFile(lessFile, {encoding: "utf8"}, function(err2, data2){
  	  	  if (err2) {
  	  	  	next();
  	  	  } else {
            less.render(data2, function (e, css){
             	res.writeHead(200,{
			"Content-Type":"text/css;charset=UTF-8",
			"Content-Length":css.length

		});
		 res.end(css)
            });
          }
  	  	})

  	  }
  	  else {
        res.setHeader('Content-Length', css.length)
        res.setHeader('Content-Type', 'text/css; charset=UTF-8')
        res.end(data)
      }

    })
  }
}

module.exports = makeLess;
