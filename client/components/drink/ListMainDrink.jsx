import React from 'react'; 
import DrinkItem from './DrinkItem.jsx'; 


class ListIngredient extends React.Component{
    componentWillMount(){
      this.props.getListMainDrink();
    }
    render(){
      return (
        <div>
          <table className="table table-bordered">
           <thead>
             <tr> 
               <th>Type name</th>
                <th>Step kind</th>
               <th>Img</th>
               <th>Icon</th>
               <th>Price</th> 
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
            {this.props.listMainDrink.map(drink =>
                 <DrinkItem 
                  key = {drink._id}
                  drink = {drink} 
                  chooseDrinkType = {this.props.chooseDrinkType}/>
              )
            }
           </tbody>
         </table>  
       </div>
      );
    }
};


export default ListIngredient;
