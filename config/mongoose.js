var configDetail = require('./config'),
	mongoose = require('mongoose');

module.exports = function(){
	var noSqlDb = mongoose.connect(configDetail.dbUrl);
 
	require('../server/model/drink');  

	return noSqlDb;
}