
import React from 'react';  

import ListIngredient from './../ingredient/ListIngredient';  

import RaisedButton from 'material-ui/RaisedButton';

class CreateSecondRecipe extends React.Component{
   constructor(props){
        super(props);
        this.state = {  
            type: this.props.mainDrinkType,
            recipe: [],
            error: ''
        };
        this.submitThirdRecipe = this.submitThirdRecipe.bind(this);   
        this.tickIngredient = this.tickIngredient.bind(this);

    } 
  componentWillMount(){
      this.props.getListIngredient();
    }
    submitThirdRecipe() { 
    	var newThirdRecipe = this.state;
        this.props.createThirdDrinkType(newThirdRecipe); 
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
             	<RaisedButton label={'Approve second type recipe for ' + this.props.mainDrinkType}
             	              primary={true}
             	              onClick={() => this.submitThirdRecipe()}/>
            </div>
        );
    }
};

export default CreateSecondRecipe;