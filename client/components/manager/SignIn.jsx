import React from 'react';  

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
               <button onClick={this.getValueSignIn}>Sign In</button>
               <DialogMessage closeMessage = {this.props.clearMessage}
                              message= {this.props.managerStore.message}/>
            </div>
        );
    }
};

export default SignIn;