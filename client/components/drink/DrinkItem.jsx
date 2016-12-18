import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {hostServer} from './../../constant/ApiUri';

import RaisedButton from 'material-ui/RaisedButton';

class DrinkItem extends React.Component{
  constructor(props){

    super(props);
    this.chooseThisType = this.chooseThisType.bind(this);
  }
  chooseThisType(type){
  	this.props.chooseDrinkType(type);
  }
  render(){
      return (





        <tr>
          <td className="col-sm-3">{this.props.drink.type}</td>
          <td className="col-sm-3">{this.props.drink.step}</td>
          <td className="col-sm-3">
            <img className="img-thumbnail" src={hostServer +this.props.drink.typeImg} style={{height: '80px', width: '80%'}}/>
          </td>
           <td className="col-sm-3">
            <img className="img-thumbnail" src={hostServer +this.props.drink.typeIcon} style={{height:'40px', width: '40px'}}/>
          </td>
            <td className="col-sm-3">{this.props.drink.price} $</td>
           <td>
             <RaisedButton onClick={() => this.chooseThisType(this.props.drink.type)}
                            primary={true}   label="Choose"
              />
           </td>
        </tr>
      );
    }
};


export default DrinkItem;
