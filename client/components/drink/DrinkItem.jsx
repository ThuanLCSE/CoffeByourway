import React from 'react'; 
import {hostServer} from './../../constant/ApiUri';


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
            <img className="img-responsive" src={hostServer +this.props.drink.typeImg} />
          </td> 
           <td className="col-sm-3">
            <img className="img-responsive" src={hostServer +this.props.drink.typeIcon} />
          </td> 
            <td className="col-sm-3">{this.props.drink.price} $</td>
           <td>
             <button onClick={() => this.chooseThisType(this.props.drink.type)}>
                choose
              </button> 
           </td>
        </tr>
      );
    }
};


export default DrinkItem;
