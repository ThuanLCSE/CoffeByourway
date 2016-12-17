
import * as actType from '../constant/ActionTypes';
var defaultState = { 
	listIngredient: [],
	ingredient: {}
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) { 
    case actType.getListIngredientSuccess:
          newState.listIngredient = action.listIngredient; 

    case actType.createIngredientSuccess:
    	newState.listIngredient.push(action.ingredient);
          newState.ingredient = action.ingredient; 
  }
  return state;
}