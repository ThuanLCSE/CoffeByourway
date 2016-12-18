import * as api from './../constant/ApiUri';
import restApi from "./service/restAPI.js";
import * as actType from '../constant/ActionTypes';

export function getFirstStepCustomData() { 
    return function (dispatch) {
	  	return restApi.get(api.getAllMainType).then((response) => {
	    	console.log(response);
	       dispatch({ type: actType.getMainTypeSuccess,
                     listMainDrink : response.listDrink,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: actType.customerActionFail,
                     message: err.responseText
                    });
		});
	};
} 
export function getListSecondRecipe(type) { 

    return function (dispatch) {
        return restApi.get(api.getSecondRecipeByType + type).then((response) => {
            console.log(response);
           dispatch({ type: actType.getListSecondRecipe,
                     listSecondRecipe : response.recipes,
                    message: response.message}
                   );
        }).catch((err) => {
            console.log(err);
            dispatch({ type: actType.customerActionFail,
                     message: err.responseText
                    });
        });
    };
} 
export function getListPattern() { 
    return function (dispatch) {
        return restApi.get(api.listAllPattern).then((response) => { 
           dispatch({ type: actType.getListPatternSuccess,
                     listPattern : response.listPattern}
                   );
        }).catch((err) => {
            console.log(err);
            dispatch({ type: actType.customerActionFail,
                     message: err.responseText
                    });
        });
    };
}
export function getListThirdRecipe(type) { 

    return function (dispatch) {
        return restApi.get(api.getThirdRecipeByType + type).then((response) => {
            console.log(response);
           dispatch({ type: actType.getListThirdRecipe,
                     listThirdRecipe : response.recipes,
                    message: response.message}
                   );
        }).catch((err) => {
            console.log(err);
            dispatch({ type: actType.customerActionFail,
                     message: err.responseText
                    });
        });
    };
} 

export function changeMainType(type) { 
    return { 
    			type: actType.changeMainDrink,
    			drinkType: type
            }
                   
} 
export function addSecondRecipe(recipe) { 
    return { 
                type: actType.addSecondRecipe,
                recipe: recipe
            }
                   
} 
export function addThirdRecipe(recipe) { 
    return { 
                type: actType.addThirdRecipe,
                recipe: recipe
            }
                   
} 