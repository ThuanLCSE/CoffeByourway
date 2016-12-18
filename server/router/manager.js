var managerCtrl = require('../controller/manager.ctrl'); 
var ingredientCtrl = require('../controller/ingredient.ctrl'); 
var patternCtrl = require('../controller/pattern.ctrl'); 
var drinkCtrl = require('../controller/drink.ctrl'); 
var customCupCtrl = require('../controller/customCup.ctrl'); 

module.exports = function(app){
	 
	app.route('/api/mng/signIn')
	.post(managerCtrl.signIn);
	app.route('/api/mng/checkSignIn')
	.get(managerCtrl.checkSignIn);
	app.route('/api/mng/signUp')
	.post(managerCtrl.checkEmailNotExist, managerCtrl.signUp);
	app.route('/api/mng/signOut')
	.get(managerCtrl.signOut);
	app.route('/api/ingre/create')
	.post(managerCtrl.checkManager,ingredientCtrl.create);
	app.route('/api/ingre/remove')
	.post(managerCtrl.checkManager,ingredientCtrl.remove);
	app.route('/api/ingre/getAll')
	.get(managerCtrl.checkManager,ingredientCtrl.getAll);

	app.route('/api/drink/create')
	.post(managerCtrl.checkManager,drinkCtrl.create);

	app.route('/api/custom/approve/:customCupId').
	get(customCupCtrl.getCustomCupByID, customCupCtrl.approve, customCupCtrl.save);
	app.route('/api/patternCtrl/create')
	.post(managerCtrl.checkManager,patternCtrl.create);
	app.route('/api/patternCtrl/getAll')
	.get(patternCtrl.getAll);
 
	
}