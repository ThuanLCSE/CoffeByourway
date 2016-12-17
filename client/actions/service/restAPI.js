let $ = require('jquery');

module.exports = {
	get(url){
		return new Promise(function(success,error){
			$.ajax({
				url:url,
				dataType:"json", 
				xhrFields: {
	                withCredentials: true
	            },
	            crossDomain: true,
				success,
				error
			});
		});
	}, 
	post(url,data){
		return new Promise(function(success,error){
			$.ajax({
				url,
				type:'POST',
				dataType:"json", 
				xhrFields: {
	                withCredentials: true
	            },
	            crossDomain: true,
				data,
				success,
				error
			})
		})
	} 
}
