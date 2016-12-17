var Manager = require('mongoose').model('Manager');  
  
exports.signIn = function(req,res){
	var data = {};
	data.email = req.body.email;
	data.password = req.body.password;
  	Manager.findOne({ 
  		active: true,
  		email: data.email,
  		password: data.password
  	 }, function (err, manager) {
	  if (err) {
	  	res.status(400).send(err);
	  } else if (manager === null) {
 		res.status(400).send('wrong email or password');
	  } else {
	  	 
		req.session.manager = { 
			email: manager.email,
			manangerId: mananger._id
		};
  		res.status(200).send({
		  		manager:manager,
		  		message: "sign in as manager success",
		  	});
			
	  }
  });
}; 

exports.signUp = function(req,res){
	var newManager = new Manager({
		email : req.body.email,
		password : req.body.password,
		fullName : req.body.fullName,
	});
	
  	newManager.save(function (err, manager) {
	  if (err) {
	  	res.status(400).send(err);
	  }  else { 
		req.session.manager = { 
			email: manager.email,
			manangerId: manager._id
		};
  		res.status(200).send({
		  		manager:manager,
		  		message: "sign up as manager success",
	  	}); 
	  }
  });
};
exports.signOut = function(req,res){
	req.session.manager = null; 
	  if (req.session.manager) { 
 		res.status(400).send('sign out failed');
	  } else {  
		res.status(200).send({
			message: "sign out success",
	  	});    
	  }
};
exports.checkEmailNotExist = function(req,res,next){
	var currentEmail = req.body.email;

  	Manager.findOne({ 
  		email: currentEmail
  	}, 
	function(err, manager) {
	    if (err ) {
	      return res.status(400).send(err);
	    } else if (manager === null){
	    	next();
	    } 
	    else {
	      res.status(400).send({
	  			message: 'email already exist'
  			}); 
    }
  });
};
exports.checkManager = function(req,res,next){ 
	if (!req.session.manager){
		res.status(200).send({
	  		message: 'not authorized' 
	  	});
	} else {
		next();
	}
	
};