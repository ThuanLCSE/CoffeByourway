import React from 'react';  

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
            <div>
               Email:
               <input type = "text" name = "email" value ={this.state.manager.email}
               onChange={(e) => this.handleChange('email', e)}
               />
               <br/>
               Password:
               <input type = "text" name= "password" value ={this.state.manager.password}
               onChange={(e) => this.handleChange('password', e)}
               />
               <br/>
                Confirm password:
               <input type = "text" name= "confirmPassword" value ={this.state.manager.confirmPassword}
               onChange={(e) => this.handleChange('confirmPassword', e)}  />
               <p>{this.state.error}</p>
               <br/>
                Full name:
               <input type = "text" name= "fullName" value ={this.state.manager.fullName}
               onChange={(e) => this.handleChange('fullName', e)}
               />
               <br/>
               <button onClick={this.getValueSignUp}>Sign Up </button>
               <DialogMessage closeMessage = {this.props.clearMessage}
                              message= {this.props.managerStore.message}/>
            </div>
        );
    }
};

export default SignUp;