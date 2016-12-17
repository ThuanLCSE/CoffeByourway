import { combineReducers } from 'redux';
import CustomerStore from './CustomerStore.jsx';  
import DrinkStore from './DrinkStore.jsx';  
import CustomCupStore from './CustomCupStore.jsx'; 


const RootReducers = combineReducers({
  CustomerStore,
  DrinkStore,
  CustomCupStore 
})

export default RootReducers
