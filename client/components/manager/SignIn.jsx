import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import DialogMessage from './../utils/DialogMessage'; 

class SignIn extends React.Component{
   constructor(props){
        super(props);
        this.state = { 
            manager: {
                email: '',
                password: '' 
            }
        };
        this.getValueSignIn = this.getValueSignIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getValueSignIn() {
        var managerData = this.state.manager;
        this.props.signInFunc(managerData);
    }

    handleChange(att, e) {
        var newManager = this.state.manager;
        newManager[att] = e.target.value;
        this.setState({
          manager: newManager
        });
    }

    render(){
        return (
            <Paper style={{padding: 15, marginTop: 25, height: '30vh'}}>
                <TextField  floatingLabelText="Your email"
                            defaultValue={this.state.manager.email}
                            fullWidth={true}
                            onChange={(e) => this.handleChange('email', e)}/><br/>
                <TextField  type="password"
                            floatingLabelText="Your password"
                            defaultValue={this.state.manager.password}
                            fullWidth={true}
                            onChange={(e) => this.handleChange('password', e)}/><br/><br/>
                <RaisedButton label="Sign In" primary={true} onClick={this.getValueSignIn}/>
                <DialogMessage closeMessage = {this.props.clearMessage}
                              message= {this.props.managerStore.message}/>
            </Paper>
        );
    }
};

export default SignIn;