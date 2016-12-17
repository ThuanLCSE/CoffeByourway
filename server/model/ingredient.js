var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var IngredientSchema = new Schema({ 
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
    price: {
      type: Number, 
        default: 0
    }
}); 
var Ingredient = mongoose.model('Ingredient',IngredientSchema);