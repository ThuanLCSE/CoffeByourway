var configDetail = require('./config'),
	mongoose = require('mongoose');

module.exports = function(){
	var noSqlDb = mongoose.connect(configDetail.dbUrl);
 
	require('../server/model/drink');  
	require('../server/model/customCup');  
	require('../server/model/manager');  
	require('../server/model/pattern'); 
	require('../server/model/ingredient');  

	return noSqlDb;
}