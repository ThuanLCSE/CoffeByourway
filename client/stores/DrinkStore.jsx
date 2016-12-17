import * as actType from '../constant/ActionTypes';
var defaultState = { 
	drink: {},
  listMainDrink: [],
  listSecondRecipe: [],
  listThirdRecipe: [],
  currentMainDrink: null
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state); 

  switch (action.type) { 
    case actType.createMainDrinkSuccess:
        newState.drink = action.drink; 
        newState.currentMainDrink = action.drink.type;
      return newState;
    case actType.createSecondRecipeSuccess: 
      newState.listSecondRecipe.push(action.drink);
       newState.drink = action.drink;  
      return newState;
    case actType.createThirdRecipeSuccess: 
     newState.listThirdRecipe.push(action.drink);
       newState.drink = action.drink;  
       return newState;
    case actType.getMainTypeSuccess:
          newState.listMainDrink = action.listMainDrink;  
          return newState;
        case actType.changeMainDrink: 
          newState.currentMainDrink = action.drinkType; 
          return newState; 
       case actType.getListSecondRecipe:
          newState.listSecondRecipe = action.listSecondRecipe;  
          return newState;
       case actType.getListThirdRecipe:
          newState.listThirdRecipe = action.listThirdRecipe;  
          return newState; 

 
    default:
      return newState;
  }
  
}