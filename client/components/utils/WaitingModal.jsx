import React from 'react'; 
 
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';



class WaitingModal extends React.Component{
  constructor(props) {
        super(props);
  }
 
  render(){
    return(
      <Dialog
              title="waiting" 
              modal={false}
              open={this.props.openCondition}
              > 
              <CircularProgress size={80} thickness={5} />
              <CircularProgress size={80} thickness={5} /> 
              <CircularProgress size={80} thickness={5} />
              <CircularProgress size={80} thickness={5} /> 
            </Dialog>  
    )
  }
} 

export default  WaitingModal;
