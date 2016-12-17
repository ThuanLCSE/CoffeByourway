import * as actType from '../constant/ActionTypes';
var defaultState = { 
	manager: {},
  authenticated: false,
	message: ''
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) { 
  	

    case actType.managerAuthSuccess:
          newState.manager = action.manager;
          newState.authenticated = true; 
          return newState;
          
    case actType.managerActionFail:
          newState.message = action.message; 
          return newState;
   	case actType.managerClearMessage:
   		newState.message = ''; 
         return newState;
    default:
      return newState;
  }
}