
import React from 'react';  

import ListIngredient from './../drink/ListIngredient';  

class CreateIngredient extends React.Component{
   constructor(props){
        super(props);
        this.state = {  
            type: this.props.mainDrinkType,
            recipe: [],
            error: ''
        };
        this.submitSecondRecipe = this.submitSecondRecipe.bind(this);
        this.changeRecipe = this.changeRecipe.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
        this.onIconChange = this.onIconChange.bind(this);

    } 
  componentWillMount(){
      this.props.getListIngredient();
    }
    submitSecondRecipe() { 
    	var newSeconDrinkType = this.state.drink;
        this.props.createSecondDrinkType(newSeconDrinkType); 
    }

    changeRecipe(e,isChecked, ingredient) {

	    var newRecipe = this.state.recipe;
	     
	}
   

    render(){
        return (
            <div>
             	<ListIngredient listIngredient = {this.props.listIngredient}/>
            </div>
        );
    }
};

export default CreateIngredient;