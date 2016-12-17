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

var drinkSchema = new Schema({
  	price : Number,
  	step: {
        type: String,  
        required: 'step is required', 
        trim: true
    },
	type :  {
        type: String,  
        required: 'main type is required', 
        trim: true
    },
  	typeImg: String,
  	recipe: [recipeSchema]
});
var Drink = mongoose.model('Drink',drinkSchema);

// var newDoctor = new Doctor({
// 	fullname : 'LUONG CONG DUC',
// 	username : 'bacsiDuc',
//   	password: 'ringking'
// });
// newDoctor.save(function (err, doctor) {
//   if (err) {
//   	console.log(err);
// 	} else  {
// 		console.log(doctor);
// 	}
// }) 

module.exports = Drink;