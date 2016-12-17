import * as actType from '../constant/ActionTypes';
var defaultState = { 
	manager: {},
	message: ''
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) { 
  	

    case actType.managerAuthSuccess:
          newState.manager = action.manager;
          newState.message = action.message; 
          return newState;
          
    case actType.managerAuthFail:
          newState.message = action.message; 
          return newState;
   	case actType.managerClearMessage:
   		newState.message = ''; 
         return newState;
    default:
      return state;
  }
}