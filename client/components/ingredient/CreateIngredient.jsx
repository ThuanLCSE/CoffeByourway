
import React from 'react';  

import DialogMessage from './../utils/DialogMessage'; 
import UploadImg from './../utils/UploadImg'; 

class CreateIngredient extends React.Component{
   constructor(props){
        super(props);
        this.state = { 
            ingredient: {
                type: '',
                img: '',
                price: ''
            }, 
            error: ''
        };
        this.submitIngredient = this.submitIngredient.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
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

    render(){
        return (
            <div>
               Type name:
               <input type = "text" name = "type" value ={this.state.ingredient.type}
               onChange={(e) => this.handleChange('type', e)}
               />
               <br/>
               Picture:
               <UploadImg buttonName="Up pattern of ingredient" 
               setUrl = {this.onUrlChange}/> 
               <br/>
                Price :
               <input type = "text" name= "price" value ={this.state.ingredient.price}
               onChange={(e) => this.handleChange('price', e)}  /> 
               <br/>
               <button onClick={this.submitIngredient}>Create </button>
               <DialogMessage closeMessage = {this.props.clearMessage}
                              message= {this.props.managerStore.message}/>
            </div>
        );
    }
};

export default CreateIngredient;