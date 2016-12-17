var managerCtrl = require('../controller/manager.ctrl'); 
var ingredientCtrl = require('../controller/ingredient.ctrl'); 
var drinkCtrl = require('../controller/drink.ctrl'); 

module.exports = function(app){
	 
	app.route('/api/mng/signIn')
	.post(managerCtrl.signIn);
	app.route('/api/mng/signUp')
	.post(managerCtrl.checkEmailNotExist, managerCtrl.signUp);
	app.route('/api/mng/signOut')
	.get(managerCtrl.signOut);
	app.route('/api/ingre/create')
	.post(managerCtrl.checkManager,ingredientCtrl.create);
	app.route('/api/ingre/getAll')
	.get(managerCtrl.checkManager,ingredientCtrl.getAll);

	app.route('/api/drink/create')
	.post(managerCtrl.checkManager,drinkCtrl.create);
	
	
}