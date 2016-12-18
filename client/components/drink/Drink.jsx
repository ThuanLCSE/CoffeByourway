
import React from 'react';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import DialogMessage from './../utils/DialogMessage'; 
import CreateMainDrink from './CreateMainDrink'; 
import CreateSecondRecipe from './CreateSecondRecipe'; 
import CreateThirdRecipe from './CreateThirdRecipe'; 
import ListMainDrink from './ListMainDrink';  


class  Drink extends React.Component{
   constructor(props){
        super(props);
        this.state = {
        	createNewMainType: false
        };
        this.createSecondRecipe = this.createSecondRecipe.bind(this);
        this.createThirdRecipe = this.createThirdRecipe.bind(this);
     	this.openCreateNewMain = this.openCreateNewMain.bind(this);
    }
    openCreateNewMain(){
    	this.setState({
    		createNewMainType : true
    	});
    }
     createMainType(){
       return(
          <div>
            Choose existed type Or 
            <RaisedButton label="Create new" primary={true} onClick={this.openCreateNewMain}/><br/>
            {this.state.createNewMainType?
            	<CreateMainDrink createMainDrinkType = {this.props.createMainDrinkType} />:
				<ListMainDrink getListMainDrink = {this.props.getListMainDrink}
								listMainDrink = {this.props.drinkStore.listMainDrink}
								chooseDrinkType = {this.props.changeMainType}/>}
          </div>
        )
    }
     createSecondRecipe(){
       return(
          <div>
          Second Recipe Type
          <CreateSecondRecipe  getListIngredient = {this.props.getListIngredient}
								createSecondDrinkType= {this.props.createSecondDrinkType}
								listIngredient= {this.props.listIngredient}
								mainDrinkType= {this.props.drinkStore.currentMainDrink} />
          </div>
        )
    }

    createThirdRecipe(){
       return(
          <div>
           Third Recipe Type
          <CreateThirdRecipe  getListIngredient = {this.props.getListIngredient}
								createThirdDrinkType= {this.props.createThirdDrinkType}
								listIngredient= {this.props.listIngredient}
								mainDrinkType= {this.props.drinkStore.currentMainDrink} />
          </div>
        )
    }

    render(){
        return (
            <Paper style={{padding: 15, marginTop: 25}}>
            	{this.createMainType()}
                {this.props.drinkStore.currentMainDrink?this.createSecondRecipe():null}
                {this.props.drinkStore.currentMainDrink?this.createThirdRecipe():null}
                    <DialogMessage closeMessage = {this.props.clearMessage}
                              message= {this.props.managerStore.message}/>
            </Paper>
        );
    }
};

export default Drink;
