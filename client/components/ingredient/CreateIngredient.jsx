
import React from 'react';  

import DialogMessage from './../utils/DialogMessage'; 
import UploadImg from './../utils/UploadImg'; 

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class CreateIngredient extends React.Component{
   constructor(props){
        super(props);
        this.state = { 
            ingredient: {
                type: '',
                img: '',
                icon: '',
                price: ''
            }, 
            error: ''
        };
        this.submitIngredient = this.submitIngredient.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
        this.onIconChange = this.onIconChange.bind(this);

    }


    submitIngredient() {
	 
		 var newIngredient = this.state.ingredient;
   		 this.props.createIngredient(newIngredient); 
    }

    handleChange(att, e) {
        var newIngredient = this.state.ingredient;
        newIngredient[att] = e.target.value;
        this.setState({
          ingredient: newIngredient
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
                <TextField  floatingLabelText="Type name"
                            defaultValue={this.state.ingredient.type}
                            fullWidth={true}
                            onChange={(e) => this.handleChange('type', e)}/><br/>
                <UploadImg buttonName="Up pattern of ingredient" 
                           setUrl = {this.onUrlChange}/><br/>
                <UploadImg buttonName="Up Icon of ingredient" 
                           setUrl = {this.onIconChange}/><br/>
                <TextField  floatingLabelText="Price"
                            defaultValue={this.state.ingredient.price}
                            fullWidth={true}
                            onChange={(e) => this.handleChange('price', e)}/><br/><br/>
                <RaisedButton label="Create" primary={true} onClick={this.submitIngredient}/><br/><br/>
                <DialogMessage closeMessage = {this.props.clearMessage}
                               message= {this.props.managerStore.message}/>
            </div>
        );
    }
};

export default CreateIngredient;