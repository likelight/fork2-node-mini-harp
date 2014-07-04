var path = require("path");

module.exports = indexPath;

function indexPath()
{
	return function(req,res,next){
		if(req.url == '/'){
			req.url = '/index.html';
		
		}
		next();	
	}
	
}
