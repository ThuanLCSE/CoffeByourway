var drinkContrl = require('../controller/drink.ctrl'); 

module.exports = function(app){
	 
	app.route('/api/coffee/mainType')
	.get(drinkContrl.getAllMainType);
	app.route('/api/coffee/secondRecipe/:drinkId')
	.get(drinkContrl.getDrinkByID, drinkContrl.getSecondRecipeByType);
	
}