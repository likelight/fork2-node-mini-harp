var jade = require('jade');
var path = require('path');
var fs = require('fs');

module.exports = function(root) {
  return function(req, res, next){
    if (path.extname(req.url) !== '.html'){return next();}
    var jade_file_path = (root+req.url).replace(/.html$/, '.jade');
    fs.readFile(jade_file_path, {encoding: "utf8"}, function(err, data){
      if (err){return next();}
      jade.render(data, function(err, html){
        if(err){return next();}
        res.writeHead(200, {
          "Content-Type": "text/html; charset=UTF-8",
          "Content-Length": html.length
        });
        res.end(html);
      });
    });
  };
};
