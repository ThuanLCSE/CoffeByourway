import React from 'react'; 
import {hostServer} from './../../constant/ApiUri';


class ingredientItem extends React.Component{
  constructor(props){

    super(props); 
    this.checkbox = this.checkbox.bind(this);
    this.removeButton = this.removeButton.bind(this);
    this.checkIngredient = this.checkIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    


  }
  checkIngredient(e, isChecked,ingredient){
    this.props.tickIngredient(isChecked, ingredient);
  }
  removeIngredient(ingredientId){
    this.props.removeIngredient(ingredientId);
  }
  removeButton(ingredientId){
    return (
          <button  onClick={() => this.removeIngredient(ingredientId)}>
          Remove </button>
      )
  }
      
  checkbox(ingredient){
    return (
          <Checkbox  onCheck={(e,isChecked, code) => this.checkIngredient(e, isChecked,ingredient)}/>
      )
  }
  render(){ 
      return (
        <tr>
          <td className="col-sm-3">{this.props.ingredient.type}</td>
          <td className="col-sm-3">
            <img className="img-responsive" src={hostServer +this.props.ingredient.img} />
          </td> 
           <td className="col-sm-3">
            <img className="img-responsive" src={hostServer +this.props.ingredient.icon} />
          </td> 
            <td className="col-sm-3">{this.props.ingredient.price} $</td>
           <td>
              {this.props.tickIngredient?this.checkbox(this.props.ingredient):null}
              {this.props.removeIngredient?this.removeButton(this.props.ingredient._id):null}
               
           </td>
        </tr>
      );
    }
};


export default ingredientItem;
