var path = require("path");

function rejectPath() {
	return function(req,res,next){
		filetype = path.extname(req.url);
		console.log(filetype);
		if (filetype == '.jade' || filetype == '.less') {
			res.statusCode = 404;
			res.end();
			console.log("failed");
		};
		next();
	}
}

module.exports = rejectPath;
