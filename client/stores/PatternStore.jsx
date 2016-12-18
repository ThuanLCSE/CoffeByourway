


import * as actType from '../constant/ActionTypes';
var defaultState = { 
 	pattern: {},
 	listPattern: [],
	message: ''
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) { 
  	case actType.createPatternSuccess:
    newState.listPattern.push(action.pattern);
        newState.pattern = action.pattern;  
      return newState;
    case actType.getListPatternSuccess:  
       newState.listPattern = action.listPattern;  
      return newState;
    default:
      return newState;
  }
     
}