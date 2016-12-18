import React from 'react'; 
import PatternItem from './PatternItem.jsx'; 


class ListIngredient extends React.Component{
    componentWillMount(){
      this.props.getListPattern();
    }
    render(){
      return (
        <div>
          <table className="table table-bordered">
           <thead>
             <tr>
               <th>Url</th>
             </tr>
           </thead>
           <tbody>
            {this.props.listPattern.map(pattern =>
                 <PatternItem 
                  key = {pattern._id}
                  pattern = {pattern}/>
              )
            }
           </tbody>
         </table>  
       </div>
      );
    }
};


export default ListIngredient;
