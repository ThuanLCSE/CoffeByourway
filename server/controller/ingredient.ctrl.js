var Ingredient = require('mongoose').model('Ingredient');  
 
exports.create = function(req,res){
	var newIngredient = new Ingredient({ 
    	type: req.body.type,
		img: req.body.img,
		price: req.body.price,
		icon: req.body.icon
	});
	
  	newIngredient.save(function (err, ingredient) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
	  	res.status(200).send({
	  		ingredient : ingredient,
	  		message : 'create ingreedient success',
	  	});
	  }
  });
};

exports.getAll = function(req,res){ 
  	Ingredient.find({}, function (err, ingredients) {
	  if (err) {
	  	res.status(400).send(err);
	  } else { 
  		res.status(200).send({
		  		listIngredient: ingredients,
		  		message: "get listIngredient success",
		  	});
			
	  }
  });
};   