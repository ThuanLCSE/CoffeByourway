
import * as actType from '../constant/ActionTypes';
var defaultState = { 
	listType: [],
	message: ''
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) { 
    case actType.getMainTypeSuccess:
          newState.listType = action.listType;
          newState.message = action.message; 
          return newState;
          
    case actType.getMainTypeFail:
          newState.message = action.message; 
          return newState;
    default:
      return state;
  }
}