import React from 'react'; 
 import { Modal, Button } from 'react-bootstrap'; 
import {hostServer} from './../../constant/ApiUri';
import RaisedButton from 'material-ui/RaisedButton';



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
    chooseMainType(type,url){
      this.props.goSecondStep(type);
      this.props.changeMainType(type);
      document.getElementById('handleIngredientPattern').value = url;
      document.getElementById('handleIngredientPattern').click("1");
      document.getElementById('handleIngredientPattern').click("2");
      document.getElementById('handleIngredientPattern').click("3");
      this.closeDialog();
    }
    closeDialog(){
      this.setState({
        open: false
      })
    }
    drinkItem(drink){
    	return(
    		<div  key= {drink._id}>
          <div className="col-sm-4 align-center">
    		       
	            
	            <img className="img-responsive main-img col-sm-12" onClick={() => this.chooseMainType(drink.type,drink.typeImg)} src={hostServer +drink.typeIcon} />
	          	  <hr/>
                <label className="main-label" >{drink.type} </label>

	                 <label className="main-price" >{drink.price} $</label>
            </div>
    		</div>
    		)
    }
 	listDrink(){
 		return(
      <div className="container">
   			<div className="row middle-modal">
   			{this.props.listMainType.map(this.drinkItem)}
   			</div>
        </div>
 			)
 	}
  render(){
    let modalStyle = {
      backgroudColor: 'gray'
    }
    return(
      <div >
       <Modal  show={this.state.open} onHide={this.closeDialog}>  
          <Modal.Body className="big-modal">
           <div className="nice-title"> Choose your drink</div>
               {this.listDrink()} 
          </Modal.Body> 
        </Modal>
       </div>
    );
  }
} 

export default  ChooseMainTypeModal;
