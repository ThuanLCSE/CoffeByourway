var Pattern = require('mongoose').model('Pattern');  
 
exports.create = function(req,res){
	var newPat = new Pattern({  
		url : req.body.url, 
	});
	
  	newPat.save(function (err, pattern) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		pattern : pattern,
	  		message : 'create pattern success',
	  	});
	  }
  });
};

exports.getAll = function(req,res){ 
  	Pattern.find({  
  	 }, function (err, patterns) {
	  if (err) {
	  	res.status(400).send(err);
	  } else if (patterns === null) {
 		res.status(400).send('not found patterns');
	  } else { 
  		res.status(200).send({
		  		listPattern: patterns,
		  		message: "get list pat success",
		  	});
			
	  }
  });
};  