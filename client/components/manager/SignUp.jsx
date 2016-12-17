import React from 'react';  

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import DialogMessage from './../utils/DialogMessage'; 

class SignUp extends React.Component{
   constructor(props){
        super(props);
        this.state = { 
            manager: {
                email: '',
                password: '',
                fullName: '',
                confirmPassword: ''
            }, 
            error: ''
        };
        this.getValueSignUp = this.getValueSignUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getValueSignUp() {
    	if (this.state.password !== this.state.confirmPassword){
		 this.setState({
		      error: 'confirm password not match'
		    });
    	} else {
    		 var managerData = this.state.manager;
       		 this.props.signUpFunc(managerData);
    	} 
    }

    handleChange(att, e) {
        var newManager = this.state.manager;
        newManager[att] = e.target.value;
        this.setState({
          manager: newManager
        });
        if (this.state.password === this.state.confirmPassword){
        	 this.setState({
		      error: ''
		    });
        }
    }

    render(){
        return (
            <Paper style={{padding: 15, marginTop: 25, height: '60vh'}}>
                <TextField  floatingLabelText="Your name"
                            defaultValue={this.state.manager.fullName}
                            fullWidth={true}
                            onChange={(e) => this.handleChange('fullName', e)}/><br/>
                <TextField  floatingLabelText="Your email"
                            defaultValue={this.state.manager.email}
                            fullWidth={true}
                            onChange={(e) => this.handleChange('email', e)}/><br/>
                <TextField  type="password"
                            floatingLabelText="Your password"
                            defaultValue={this.state.manager.password}
                            fullWidth={true}
                            onChange={(e) => this.handleChange('password', e)}/><br/>
                <TextField  type="password"
                            floatingLabelText="Confirm password"
                            defaultValue={this.state.manager.confirmPassword}
                            fullWidth={true}
                            onChange={(e) => this.handleChange('confirmPassword', e)}/><br/><br/>
               <RaisedButton label="Sign Up" primary={true} onClick={this.getValueSignUp}/>
               <DialogMessage closeMessage = {this.props.clearMessage}
                              message= {this.props.managerStore.message}/>
            </Paper>
        );
    }
};

export default SignUp;