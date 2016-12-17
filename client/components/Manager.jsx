import React from 'react';   

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';  
import * as ManagerAct from './../actions/ManagerAction.jsx';  
import SignIn from './manager/SignIn.jsx';   
import SignUp from './manager/SignUp.jsx';   
import Ingredient from './ingredient/Ingredient.jsx';   


class Manager extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            view: 'home'
        };
        this.changeView = this.changeView.bind(this); 
        this.signIn = this.signIn.bind(this); 
        this.signUp = this.signUp.bind(this); 
        this.viewIngredient = this.viewIngredient.bind(this);
        this.homeView = this.homeView.bind(this);
        this.notAuthView = this.notAuthView.bind(this); 

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
    viewIngredient(){
         return (
            <Ingredient createIngredient =  {this.props.ManagerAct.createIngredient} 
                        clearMessage = {this.props.ManagerAct.clearMessage} 
                        managerStore = {this.props.ManagerStore}
                        getListIngredient = {this.props.ManagerAct.getListIngredient}  
                        listIngredient = {this.props.IngredientStore.listIngredient}/>
            )
    }
 	homeView(){
 		return(
 				<div>

                    welcome manager {this.props.ManagerStore.manager.fullName} <br/> 
                    <button onClick={() => this.changeView('ingredient')}>Manage Ingredient</button>
                    {this.state.view === 'ingredient'?this.viewIngredient():null} 
                    
                </div>
        
 			)
 	}
    notAuthView(){
        return(
                <div>
                    <button onClick={() => this.changeView('sign in')}> Sign in </button>
                    <button onClick={() => this.changeView('sign up')}> Sign up </button>
                    {this.state.view === 'sign in'?this.signIn():null} 
                   {this.state.view === 'sign up'?this.signUp():null}  
                </div>
            )
    }
	  render(){
	    return(

	      <z>   
              {!this.props.ManagerStore.authenticated?this.notAuthView(): this.homeView()} 
	      </z>
	    );
	  }
}

const mapStateToProps = state => ({  
	ManageDrinkStore: state.ManageDrinkStore,
    ManagerStore: state.ManagerStore,
    IngredientStore: state.IngredientStore
});

const mapDispatchToProps = dispatch => ({ 
  ManagerAct: bindActionCreators(ManagerAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Manager);
