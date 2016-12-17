import * as actType from '../constant/ActionTypes';
var defaultState = { 
	drink: {}
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state); 

  switch (action.type) { 
    case actType.createMainDrinkSuccess:
        newState.drink = action.drink; 

    case actType.createSecondRecipeSuccess: 
         newState.drink = action.drink;  
      case actType.createThirdRecipeSuccess: 
         newState.drink = action.drink;  
  }
  return state;
}