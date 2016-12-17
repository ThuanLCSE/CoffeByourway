import * as actType from '../constant/ActionTypes';
var defaultState = { 
	listSecondRecipe: [],
	thirdRecipe: []
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) { 
  	  case actType.addSecondRecipe:
  	  		for (var i in newState.listSecondRecipe)
  	  			if (newState.listSecondRecipe[i].level === action.recipe.level){
  	  				if (newState.listSecondRecipe[i].type ===  action.recipe.type && newState.listSecondRecipe[i].quantity < 3 ){ 
  	  					newState.listSecondRecipe[i].quantity ++; 
  	  				} else if (newState.listSecondRecipe[i].type !==  action.recipe.type){
  	  					newState.listSecondRecipe.splice(i,1);
  	  					action.recipe.quantity = 1;
  	  					newState.push(action.recipe);
  	  				}
  	  				action.recipe = null;
  	  			}
  	  		if (action.recipe){
  	  			newState.listSecondRecipe.splice(i,1);
  	  			action.recipe.quantity = 1;
  	  		} 
          return newState;
       case actType.addThirdRecipe:
          console.log(action)
          return newState; 

    default:
      return newState;
  }
}