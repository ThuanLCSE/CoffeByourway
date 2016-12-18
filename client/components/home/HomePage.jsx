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
  };

  handleOpen() {
    this.setState({open: true});
  }
  handleClose() {
    this.setState({open: false});
  }
  handleChoosePopover(e, view) {
       this.props.changeView(view);
       this.setState({open: false});
   }

signInModal(){
    let customContentStyle = {
        width: '25%',
        maxWidth: 'none'
      };
    
    return(
      <Dialog
            title={(<p><b>Sign In</b></p>)}
             modal={false}
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
    let fullHeight = {
        height: '100vh'
    }
    let height100 = {
       height: '100%'
    }
    // const actions = [
    //
    //   <FlatButton
    //     label="Cancel"
    //     primary={true}
    //     onTouchTap={this.handleClose}
    //   />,
    //   <FlatButton
    //     label="Submit"
    //     primary={true}
    //     disabled={false}
    //     keyboardFocused={true}
    //     onTouchTap={this.handleClose}
    //
    //   />,
    // ];
    let customContentStyle = {
    width: '25%',
    maxWidth: 'none'
  };

    let bodyHome = {

          background: "url('static/coffee.jpg') no-repeat  center center fixed", 
           backgroundSize: 'cover',


    }

    return (
      <div>
        <div className="header">
          COFFEE YOUR WAY
          </div>
          <div className="custombutton pull-right">
          MY COLLECTION
          </div>

          <div className="custombutton"  onClick={(e, view) => this.handleChoosePopover(e, 'customCup')} 
          style={{borderRight:'1px solid gray'}} >
          MAKE YOUR DRINK
          </div> 
      </div>
    );
  }
};

export default HomePage;
