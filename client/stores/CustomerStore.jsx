
import * as actType from '../constant/ActionTypes';
var defaultState = { 
 
	message: ''
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) { 
    default:
      return newState;
  }
     
}