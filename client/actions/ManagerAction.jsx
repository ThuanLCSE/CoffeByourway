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
		price : data.price
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