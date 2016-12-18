var drinkContrl = require('../controller/drink.ctrl'); 
var customCupCtrl = require('../controller/customCup.ctrl'); 

module.exports = function(app){
	 
	app.route('/api/coffee/mainType')
	.get(drinkContrl.getAllMainType);
	app.route('/api/coffee/secondRecipe/:drinkType')
	.get(drinkContrl.getSecondRecipeByType);
	app.route('/api/coffee/thirdRecipe/:drinkType')
	.get(drinkContrl.getThirdRecipeByType);
	app.route('/api/custom/create').
	post(customCupCtrl.create);
	
}