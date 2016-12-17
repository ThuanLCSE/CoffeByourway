var Drink = require('mongoose').model('Drink');  
 
exports.getAllMainType = function(req,res){ 
  	Drink.find({ 
	  	step: 'First'
  	 }, function (err, drinks) {
	  if (err) {
	  	res.status(400).send(err);
	  } else if (drink === null) {
 		res.status(400).send('not found drinks');
	  } else { 
  		res.status(200).send({
		  		listDrink: drinks,
		  		message: "get main type success",
		  	});
			
	  }
  });
};  

exports.getSecondRecipeByType = function(req,res){
	Drink.findOne({ 
		  	step: 'Second',
		  	type: req.drink.type
	  	 }, function (err, drink) {
		  if (err) {
		  	res.status(400).send(err);
		  } else if (drink === null) {
	 		res.status(400).send('not found second drink recipw');
		  } else { 
	  		res.status(200).send({
			  		recipes: drink.recipe,
			  		message: "get second recipe success",
			  	});
				
		  }
	  });
}

exports.getDrinkByID = function(req,res,next){
	Drink.findById(req.param('drinkId')).exec(function (err, drink) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else 
	  if (drink === null){
	  	res.status(400).send({
	  		message: 'not found type by drink Id'
	  	});
	  } else { 
		   		req.drink = drink;
		   		next();
		  }
	  });
}; 