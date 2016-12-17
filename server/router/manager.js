var managerCtrl = require('../controller/manager.ctrl'); 

module.exports = function(app){
	 
	app.route('/api/mng/signIn')
	.post(managerCtrl.signIn);
	app.route('/api/mng/signUp')
	.post(managerCtrl.checkEmailNotExist, managerCtrl.signUp);
	app.route('/api/mng/signOut')
	.get(managerCtrl.signOut);
	
}