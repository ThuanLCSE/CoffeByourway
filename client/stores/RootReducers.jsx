import { combineReducers } from 'redux';
import CustomerStore from './CustomerStore.jsx';  
import DrinkStore from './DrinkStore.jsx';  
import CustomCupStore from './CustomCupStore.jsx'; 
import ManagerStore from './ManagerStore.jsx'; 


const RootReducers = combineReducers({
	ManagerStore,
  CustomerStore,
  DrinkStore,
  CustomCupStore 
})

export default RootReducers
