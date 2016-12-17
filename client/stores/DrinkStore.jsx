var defaultState = { 
}

export default function CustomCup(state = defaultState, action) {
  var newState = Object.assign({}, state);
  switch (action.type) { 
    default:
      return state;
  }
}