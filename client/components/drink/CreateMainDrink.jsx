
import React from 'react';  

import UploadImg from './../utils/UploadImg'; 

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class CreateIngredient extends React.Component{
   constructor(props){
        super(props);
        this.state = { 
            drink: {
                price: '',
                type: '',
                img: '',
                icon: ''
            }, 
          
            error: ''
        };
        this.submitMainDrink = this.submitMainDrink.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
        this.onIconChange = this.onIconChange.bind(this);
   
    }


    submitMainDrink() {
   
      var newMainDrink = this.state.drink;
      this.props.createMainDrinkType(newMainDrink); 
    }

    handleChange(att, e) {
        var newMainDrink = this.state.drink;
        newMainDrink[att] = e.target.value;
        this.setState({
          drink: newMainDrink
        }); 
    }
    onUrlChange(url){
      var fakeEvent = {
        target: {
          value: url
        }
      }
      this.handleChange('img',fakeEvent)
    }
    onIconChange(url){
      var fakeEvent = {
        target: {
          value: url
        }
      }
      this.handleChange('icon',fakeEvent)
    }
   

    render(){
        return (
            <div>
                <TextField  floatingLabelText="Main type name"
                            defaultValue={this.state.drink.type}
                            fullWidth={true}
                            onChange={(e) => this.handleChange('type', e)}/><br/>
                <UploadImg buttonName="Up pattern of drink" 
                           setUrl = {this.onUrlChange}/><br/>
                <UploadImg buttonName="Up Icon of drink" 
                           setUrl = {this.onIconChange}/><br/>
                <TextField  floatingLabelText="Price"
                            defaultValue={this.state.drink.price}
                            fullWidth={true}
                            onChange={(e) => this.handleChange('price', e)}/><br/><br/>
                <RaisedButton label="Create" primary={true} onClick={this.submitMainDrink}/><br/><br/>
            </div>
        );
    }
};

export default CreateIngredient;