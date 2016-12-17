import React from 'react'; 
import IngredientItem from './IngredientItem.jsx'; 


class ListIngredient extends React.Component{
    componentWillMount(){
      this.props.getListIngredient();
    }
    render(){
      return (
        <div>
          <table className="table table-bordered">
           <thead>
             <tr>
               <th>Type name</th>
               <th>Img</th>
               <th>Icon</th>
               <th>Price</th> 
               <th>Action</th>
             </tr>
           </thead>
           <tbody>
            {this.props.listIngredient.map(ingredient =>
                 <IngredientItem 
                  key = {ingredient._id}
                  ingredient = {ingredient}  />
              )
            }
           </tbody>
         </table>  
       </div>
      );
    }
};


export default ListIngredient;
