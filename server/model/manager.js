var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var managerSchema = new Schema({ 
    password :{
    	type: String,
    	required: 'Password required'
    },
    email: {
    	type: String,
    	required: 'email required'
    }, 
    createdDay: {
    	type: Date,
        default: Date.now
    },
    fullName: {
    	type: String,
    	required: 'fullName required'
    }, 
    active: {
        type: Boolean,
        default: true
    }
});


var Manager = mongoose.model('Manager', managerSchema); 