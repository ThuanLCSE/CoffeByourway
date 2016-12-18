import * as actType from '../constant/ActionTypes';
var defaultState = { 
	listSecondRecipe: [],
	thirdRecipe: {}
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) { 
  	  case actType.addSecondRecipe:
  	  		for (var i in newState.listSecondRecipe)
  	  			if (newState.listSecondRecipe[i].level === action.recipe.level){
  	  				if ((newState.listSecondRecipe[i].type ===  action.recipe.type) && (newState.listSecondRecipe[i].quantity < 3) ){ 
  	  					newState.listSecondRecipe[i].quantity ++; 
  	  				} else if (newState.listSecondRecipe[i].type !==  action.recipe.type){
  	  					newState.listSecondRecipe.splice(i,1);
  	  					action.recipe.quantity = 1;
  	  					newState.listSecondRecipe.push(action.recipe);
  	  				}
  	  				action.recipe = null;
  	  			}
  	  		if (action.recipe){
            action.recipe.quantity = 1;
  	  			newState.listSecondRecipe.push(action.recipe); 
  	  		} 
          return newState;
       case actType.addThirdRecipe:
          if (!newState.thirdRecipe.type) {
              newState.thirdRecipe = action.recipe;
              newState.thirdRecipe.quantity = 1;
          } else
          if ( newState.thirdRecipe.type === action.recipe.type && newState.thirdRecipe.quantity < 3 ) {
            newState.thirdRecipe.quantity ++; 
          } 
          return newState; 

    default:
      return newState;
  }
}