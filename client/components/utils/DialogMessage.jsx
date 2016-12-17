import React from 'react'; 
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class DialogMessageModal extends React.Component {
    constructor(props) {
        super(props);   
        this.handleClose = this.handleClose.bind(this);  

    }   

    handleClose(){ 
    	this.props.closeMessage(); 
    }; 
    render() {
       
        const actions = [
            <FlatButton
              label="OK"
              primary={true}
              onTouchTap={this.handleClose}  />, 
          ];
        return (
           <Dialog
              title="Notice from us" 
              modal={false}
              actions={actions}
              open={(this.props.message !== '')}
              onRequestClose={this.handleClose} > 
                <label>{this.props.message}</label> 
            </Dialog> 
        );
    }
}

export default DialogMessageModal;