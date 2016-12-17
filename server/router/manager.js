var managerCtrl = require('../controller/manager.ctrl'); 
var ingredientCtrl = require('../controller/ingredient.ctrl'); 
module.exports = function(app){
	 
	app.route('/api/mng/signIn')
	.post(managerCtrl.signIn);
	app.route('/api/mng/signUp')
	.post(managerCtrl.checkEmailNotExist, managerCtrl.signUp);
	app.route('/api/mng/signOut')
	.get(managerCtrl.signOut);
	app.route('/api/ingre/create')
	.get(managerCtrl.checkManager,ingredientCtrl.create);
	app.route('/api/ingre/getAll')
	.get(managerCtrl.checkManager,ingredientCtrl.getAll);
	
	
}