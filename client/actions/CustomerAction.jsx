import * as api from './../constant/ApiUri';
import restApi from "./service/restAPI.js";
import * as actType from '../constant/ActionTypes';

export function getFirstStepCustomData() { 
    return function (dispatch) {
	  	return restApi.post(api.getAllMainType).then((response) => {
	    	console.log(response);
	       dispatch({ type: actType.getMainTypeSuccess,
                     listType : response.listDrink,
                    message: response.message}
                   );
	    }).catch((err) => {
	    	console.log(err);
	        dispatch({ type: actType.getMainTypeFail,
                     message: err.responseText
                    });
		});
	};
} 