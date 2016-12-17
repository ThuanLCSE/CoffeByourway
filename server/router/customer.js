var drinkContrl = require('../controller/drink.ctrl'); 

module.exports = function(app){
	 
	app.route('/api/coffee/mainType')
	.get(drinkContrl.getAllMainType);
	app.route('/api/coffee/secondRecipe/:drinkType')
	.get(drinkContrl.getSecondRecipeByType);
	app.route('/api/coffee/thirdRecipe/:drinkType')
	.get(drinkContrl.getThirdRecipeByType);
	
}