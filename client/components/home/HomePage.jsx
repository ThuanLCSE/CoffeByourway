import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';




class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        open: false,
    }

  this.handleOpen = this.handleOpen.bind(this);
  this.handleClose = this.handleClose.bind(this);
  this.signInModal = this.signInModal.bind(this);
  };

  handleOpen() {
    this.setState({open: true});
  }
  handleClose() {
    this.setState({open: false});
  }

signInModal(){
    return(
      <Dialog
            title={(<p><b>Sign In</b></p>)}
             modal={true}
             open={this.state.open}
             contentStyle={customContentStyle}
             onRequestClose={this.handleClose}
           >
           <TextField  floatingLabelText="Your email"
                           hintText="Your email"
                           fullWidth={true}
                        /><br/>
            <TextField  type="password"
                           floatingLabelText="Your password"
                           hintText="Your password"
                           fullWidth={true}
                          /><br/>
            <div style={{margin: 'auto', width: '80%'}}>
               <RaisedButton label="Sign In" fullWidth={true} primary={true} onClick={this.handleClose}/>
           </div>
        </Dialog> 
      )
  }

  render(){
    let centerDiv = {
      textAlign: 'center',
      margin: '50 auto',
      padding: '20% 0',
      height: '100%'
    }
    let fullHeight = {
        height: '100vh'
    }
    let buttonDiv = {
        marginBottom: '30px'
    }
    let height100 = {
       height: '100%'
    } 
    let customContentStyle = {
    width: '25%',
    maxWidth: 'none'
  };
  


    return (
      <div className = "container-fluid" style={fullHeight}>
        <div className = "row" style={height100}>
            <div className = "col-sm-6" style={centerDiv}>
              <div className = "col-sm-12" style={buttonDiv}>
                <RaisedButton  label="Sign In"  primary={true} onTouchTap={this.handleOpen}/> 
              </div>
              <div className = "col-sm-12">
                <RaisedButton label="Order"  primary={true}/>
              </div>
            </div>
        </div>
        {this.signInModal()}
      </div>
    );
  }
};

export default HomePage;
