var CustomCup = require('mongoose').model('CustomCup');  
 
exports.create = function(req,res){
	var newCustomCup = new CustomCup({ 
    	price: req.body.price, 
		type: req.body.type, 
		cupImg: req.body.cupImg, 
		recipe: req.body.recipe, 
		tableId : req.body.tableId, 
	});
	
  	newCustomCup.save(function (err, customCup) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		customCup : customCup,
	  		message : 'create customCup success',
	  	});
	  }
  });
};

exports.getAll = function(req,res){ 
  	CustomCup.find({  
  	 }, function (err, customCups) {
	  if (err) {
	  	res.status(400).send(err);
	  } else if (customCups === null) {
 		res.status(400).send('not found customCups');
	  } else { 
  		res.status(200).send({
		  		listCustomCup: customCups,
		  		message: "get main type success",
		  	});
			
	  }
  });
};  
exports.approve = function(req,res,next){ 
	 req.customCup.status = "finish";
	 next();
};  
exports.save = function(req,res){
	 req.customCup.save(function (err,customCup) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		message: 'update success',
	  		customCup: customCup,
	  	}); 
	  }
  });
}

exports.getCustomCupByID = function(req,res,next){
	CustomCup.findById(req.param('customCupId')).exec(function (err, customCup) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else 
	  if (customCup === null){
	  	res.status(400).send({
	  		message: 'not found type by customCup Id'
	  	});
	  } else { 
		   		req.customCup = customCup;
		   		next();
		  }
	  });
}; 