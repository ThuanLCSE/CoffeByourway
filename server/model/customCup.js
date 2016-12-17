var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var recipeSchema = new Schema({
  	type : {
        type: String,  
        required: 'recipte type is required', 
        trim: true
    },
	img : {
        type: String,  
        required: 'recipte img is required', 
        trim: true
    },
  	quantity: {
        type: Number, 
        default: 0
    },
    price: {
      type: Number, 
        default: 0
    }
}); 

var customCupSchema = new Schema({
  	price : String,
	type :  {
        type: String, 
        unique: true, 
        required: 'main type is required', 
        trim: true
    },
  	cupImg: String,
  	recipe: [recipeSchema],
  	tableId: {
  		type: String,
  		require: 'table id is require'
  	},
  	status: {
  		type: String, 
        default: 'pending'
  	}
});

var Cup = mongoose.model('CustomCup',customCupSchema);
 