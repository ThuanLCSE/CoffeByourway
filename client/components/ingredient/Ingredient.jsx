
import React from 'react';  

import CreateIngredient from './CreateIngredient'; 
import ListIngredient from './ListIngredient'; 

import Paper from 'material-ui/Paper';

class  Ingredient extends React.Component{
   constructor(props){
        super(props);
        this.state = {  
        };
     
    }

    render(){
        return (
            <Paper style={{padding: 15, marginTop: 25, overflow:'auto'}}>
                <CreateIngredient createIngredient = {this.props.createIngredient}
                                  clearMessage = {this.props.clearMessage}
                                  managerStore = {this.props.managerStore}/>
                <ListIngredient getListIngredient = {this.props.getListIngredient}
                                listIngredient = {this.props.listIngredient}
                                removeIngredient = {this.props.removeIngredient}/>
            </Paper>
        );
    }
};

export default Ingredient;