import React from 'react';   

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  
import * as ManagerAct from './../actions/ManagerAction.jsx';  
import SignIn from './manager/SignIn.jsx';   
import SignUp from './manager/SignUp.jsx';   

class Manager extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            view: 'home'
        };
        this.changeView = this.changeView.bind(this); 
        this.signIn = this.signIn.bind(this); 
        this.signUp = this.signUp.bind(this); 


    }   
    changeView(page){ 
        this.setState({
            view : page
        });
    }
    signIn(){
        return (
            <SignIn signInFunc = {this.props.ManagerAct.signIn} 
                clearMessage = {this.props.ManagerAct.clearMessage} 
                managerStore = {this.props.ManagerStore} />
            )
    }
    signUp(){
        return (
            <SignUp signUpFunc = {this.props.ManagerAct.signUp} 
                clearMessage = {this.props.ManagerAct.clearMessage} 
                managerStore = {this.props.ManagerStore} />
            )
    }
 	homeView(){
 		return(
 				<div>
                welcome admin
                    <button onClick={() => this.changeView('sign in')}> Sign in </button>
                    <button onClick={() => this.changeView('sign up')}> Sign up </button>
                </div>
        
 			)
 	}
	  render(){
	    return(

	      <z> 
	        {this.state.view === 'home'?this.homeView():null} 
             {this.state.view === 'sign in'?this.signIn():null} 
              {this.state.view === 'sign up'?this.signUp():null} 
	      </z>
	    );
	  }
}

const mapStateToProps = state => ({  
	ManageDrinkStore: state.ManageDrinkStore,
    ManagerStore: state.ManagerStore
});

const mapDispatchToProps = dispatch => ({ 
  ManagerAct: bindActionCreators(ManagerAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Manager);
