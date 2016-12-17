
import React from 'react';  

import ListIngredient from './../ingredient/ListIngredient';  

class CreateSecondRecipe extends React.Component{
   constructor(props){
        super(props);
        this.state = {  
            type: this.props.mainDrinkType,
            recipe: [],
            error: ''
        };
        this.submitSecondRecipe = this.submitSecondRecipe.bind(this);   
        this.tickIngredient = this.tickIngredient.bind(this);

    } 
  componentWillMount(){
      this.props.getListIngredient();
    }
    submitSecondRecipe() { 
    	var newSeconDrinkType = this.state;
        this.props.createSecondDrinkType(newSeconDrinkType); 
    }
    tickIngredient(isChecked, ingredient)  {

	    var newRecipe = this.state.recipe;
	    if (isChecked){
	    	newRecipe.push(ingredient);
	    } else  if (!isChecked){
			for (var i in newRecipe){
		    	if (newRecipe[i]._id === ingredient._id){
		    		newRecipe.splice(i,1);
		    	}
		    }
	    }
	    this.setState({
	    	recipe: newRecipe
	    })
	    
	    
	}
   

    render(){
        return (
            <div>
             	<ListIngredient getListIngredient = {this.props.getListIngredient}
                                listIngredient = {this.props.listIngredient}
             					tickIngredient = {this.tickIngredient}/>
             	<button onClick={() => this.submitSecondRecipe()}>
             	Approve second type recipe for {this.props.mainDrinkType}
             	</button>
            </div>
        );
    }
};

export default CreateSecondRecipe;