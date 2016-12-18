import React from 'react';
import {hostServer} from './../../constant/ApiUri';
import RaisedButton from 'material-ui/RaisedButton'

import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

class ingredientItem extends React.Component{
  constructor(props){

    super(props);
    this.state = {
      level: 1
    }
    this.checkbox = this.checkbox.bind(this);
    this.removeButton = this.removeButton.bind(this);
    this.checkIngredient = this.checkIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
    this.handleLevel = this.handleLevel.bind(this);


  }
  handleLevel(e){
    this.setState({
      level: e.target.value
    });

  }
  checkIngredient(e, isChecked,ingredient){
    ingredient.level = this.state.level;
    this.props.tickIngredient(isChecked, ingredient);
  }
  removeIngredient(ingredientId){
    this.props.removeIngredient(ingredientId);
  }
  removeButton(ingredientId){
    return (
      <div>
          <input type="text" value={this.state.level} onChange={this.handleLevel}/>
          <RaisedButton  onClick={() => this.removeIngredient(ingredientId)}
          Remove
          />
      </div>
      )
  }

  checkbox(ingredient){
    return (
        <z>
          <input type="number" value={this.state.level} onChange={this.handleLevel}/>
          <Checkbox  onCheck={(e,isChecked, code) => this.checkIngredient(e, isChecked,ingredient)}/>
        </z>
      )
  }
  render(){
      return (
        <tr>
          <td className="col-sm-3">{this.props.ingredient.type}</td>
          <td className="col-sm-3">
            <img className="img-responsive" src={hostServer +this.props.ingredient.img}
            style={{height: '80px', width: '80%'}}

            />
          </td>
           <td className="col-sm-3">
            <img className="img-responsive" src={hostServer +this.props.ingredient.icon}
              style={{height:'40px', width: '40px'}}
            />
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
