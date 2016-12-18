var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var PatternSchema = new Schema({ 
     
    url: {
    	type: String,
    	required: 'url required'
    }
});


var Pattern = mongoose.model('Pattern', PatternSchema); 