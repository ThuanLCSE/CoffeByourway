import * as api from './../constant/ApiUri';
import * as actType from '../constant/ActionTypes';
import restApi from "./service/restAPI.js";

export function signIn(data) { 
	var signIndata = {
		email: data.email,
		password: data.password
	}
    return function (dispatch) {
	  	return restApi.post(api.managerSignIn, signIndata).then((response) => {
	    	 
	       dispatch({ type: actType.managerAuthSuccess,
                     manager : response.manager,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: actType.managerActionFail,
                     message: err.responseText
                    });
		});
	};
} 
export function signUp(data) { 
	var signUpdata = {
		email: data.email,
		password: data.password,
		fullName : data.fullName
	}
    return function (dispatch) {
	  	return restApi.post(api.managerSignUp,signUpdata).then((response) => {
	    	
	       dispatch({ type: actType.managerAuthSuccess,
                     manager : response.manager,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: actType.managerActionFail,
                     message: err.responseText
                    });
		});
	};
} 
export function clearMessage() { 
    return { 
    			type: actType.managerClearMessage
            }
                   
} 
export function createIngredient(data) {
	
	// listAllIngredient
	var newIngredient = {
		type: data.type,
		img: data.img,
		price : data.price,
		icon : data.icon
	}
    return function (dispatch) {
	  	return restApi.post(api.createIngredient,newIngredient).then((response) => {
	    	
	       dispatch({ type: actType.createIngredientSuccess,
                     ingredient : response.ingredient,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: actType.managerActionFail,
                     message: err.responseText
                    });
		});
	};
}
export function createMainDrinkType(data) {
	
	// listAllIngredient
	var newMainDrink = {
		price: data.price,
		step: 'First',
		type: data.type,
		typeImg: data.img,
		typeIcon: data.icon,
		recipe: []
	}
    return function (dispatch) {
	  	return restApi.post(api.createDrink,newMainDrink).then((response) => {
	    	
	       dispatch({ type: actType.createMainDrinkSuccess,
                     drink : response.drink,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: actType.managerActionFail,
                     message: err.responseText
                    });
		});
	};
}

export function createSecondDrinkType(data) {
	
	// listAllIngredient
	var newSecondDrink = { 
		step: 'Second',
		type: data.type, 
		recipe: data.recipe
	}
    return function (dispatch) {
	  	return restApi.post(api.createDrink,newSecondDrink).then((response) => {
	    	
	       dispatch({ type: actType.createSecondRecipeSuccess,
                     drink : response.drink,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: actType.managerActionFail,
                     message: err.responseText
                    });
		});
	};
}
export function createThirdDrinkType(data) {
	
	// listAllIngredient
	var newThirdDrink = { 
		step: 'Third',
		type: data.type, 
		recipe: data.recipe
	}
    return function (dispatch) {
	  	return restApi.post(api.createDrink,newThirdDrink).then((response) => {
	    	
	       dispatch({ type: actType.createThirdRecipeSuccess,
                     drink : response.drink,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: actType.managerActionFail,
                     message: err.responseText
                    });
		});
	};
}

export function getListIngredient() { 
    return function (dispatch) {
	  	return restApi.get(api.listAllIngredient).then((response) => { 
	       dispatch({ type: actType.getListIngredientSuccess,
                     listIngredient : response.listIngredient,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: actType.managerActionFail,
                     message: err.responseText
                    });
		});
	};
}