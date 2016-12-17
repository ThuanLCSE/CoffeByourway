
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
    return newState;
    case actType.createIngredientSuccess:
    	newState.listIngredient.push(action.ingredient);
          newState.ingredient = action.ingredient; 
          return newState;
     case actType.removeIngredientSuccess:
      newState.listIngredient = [];
      for  (var i in state.listIngredient){
        if (state.listIngredient[i]._id !== action.ingredientId)
          newState.listIngredient.push(state.listIngredient[i]);
      } 
      return newState;
          

     default  :
      return newState;
  }
 
}