
import React from 'react';  

import CreateIngredient from './CreateIngredient'; 
import ListIngredient from './ListIngredient'; 


class  Ingredient extends React.Component{
   constructor(props){
        super(props);
        this.state = {  
        };
     
    }

    

    render(){
        return (
            <div>
                <CreateIngredient createIngredient = {this.props.createIngredient}
                                  clearMessage = {this.props.clearMessage}
                                  managerStore = {this.props.managerStore}/>
                <ListIngredient getListIngredient = {this.props.getListIngredient}
                                listIngredient = {this.props.listIngredient}/>
            </div>
        );
    }
};

export default Ingredient;