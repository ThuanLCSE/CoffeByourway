import React from 'react'; 
 
import Dialog from 'material-ui/Dialog';
import {hostServer} from './../../constant/ApiUri';



class ChooseMainTypeModal extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
          open : this.props.openCondition
        }
         this.listDrink = this.listDrink.bind(this);
         this.chooseMainType = this.chooseMainType.bind(this);
         this.closeDialog = this.closeDialog.bind(this);
         this.drinkItem = this.drinkItem.bind(this);
    }
    chooseMainType(type){
      this.props.goSecondStep(type);
      this.props.changeMainType(type);
      this.closeDialog();
    }
    closeDialog(){
      this.setState({
        open: false
      })
    }
    drinkItem(drink){
    	return(
    		<z key= {drink._id}>
    		 	<z className="col-sm-3">{drink.type}</z>  
	           	<z className="col-sm-3">
	            <img className="img-responsive" onClick={() => this.chooseMainType(drink.type)} src={hostServer +drink.typeIcon} />
	          	</z> 
	            <z className="col-sm-3">{drink.price} $</z> 
    		</z>
    		)
    }
 	listDrink(){
 		return(
 			<div>
 			{this.props.listMainType.map(this.drinkItem)}
 			</div>
 			)
 	}
  render(){
    return(
      <Dialog
              title="waiting" 
              modal={false}
              open={this.state.open}
              > 
               {this.listDrink()}
               <button onClick = {this.closeDialog}>OK </button>
            </Dialog>  
    );
  }
} 

export default  ChooseMainTypeModal;
