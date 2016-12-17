
import React from 'react';  

import UploadImg from './../utils/UploadImg'; 

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
               Main type name:
               <input type = "text" name = "type" value ={this.state.drink.type}
               onChange={(e) => this.handleChange('type', e)} />
               <br/>
               Pattern:
               <UploadImg buttonName="Up pattern of drink" 
               setUrl = {this.onUrlChange}/> 
               <br/>
                Icon:
               <UploadImg buttonName="Up Icon of drink" 
               setUrl = {this.onIconChange}/> 
               <br/>
                Price :
               <input type = "text" name= "price" value ={this.state.drink.price}
               onChange={(e) => this.handleChange('price', e)}  /> 
               <br/>
               <button onClick={this.submitMainDrink}>Create </button>
              
           
            </div>
        );
    }
};

export default CreateIngredient;