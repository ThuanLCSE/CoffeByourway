import React from 'react'; 
import {hostServer} from './../../constant/ApiUri';


class ingredientItem extends React.Component{
  constructor(props){

    super(props); 
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
             <button >
                Remove
              </button> 
           </td>
        </tr>
      );
    }
};


export default ingredientItem;
