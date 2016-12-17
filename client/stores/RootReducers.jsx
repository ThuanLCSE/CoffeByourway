import { combineReducers } from 'redux';
import CustomerStore from './CustomerStore.jsx';  
import DrinkStore from './DrinkStore.jsx';  
import CustomCupStore from './CustomCupStore.jsx'; 
import ManagerStore from './ManagerStore.jsx';  
import IngredientStore from './IngredientStore.jsx'; 
 
const RootReducers = combineReducers({
	IngredientStore,
	ManagerStore,
  CustomerStore,
  DrinkStore,
  CustomCupStore 
})

export default RootReducers
