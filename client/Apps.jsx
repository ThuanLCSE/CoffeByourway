import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware }  from 'redux';
import thunk from 'redux-thunk';

import RootReducers from './stores/RootReducers.jsx'; 

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'; 

import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

import Home from './components/Home'; 

let store = createStore(
  RootReducers,
  applyMiddleware(thunk)
);
injectTapEventPlugin();

if(typeof window !== 'undefined') {
  ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
        <Router history = {browserHistory}>
                <Route path = "/" component = {Home}/> 
          </Router>
        </MuiThemeProvider>
    </Provider>,
  document.getElementById('main')
);
}
