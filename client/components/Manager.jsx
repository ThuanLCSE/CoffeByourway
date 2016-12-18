import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ManagerAct from './../actions/ManagerAction.jsx';
import SignIn from './manager/SignIn.jsx';
import SignUp from './manager/SignUp.jsx';
import Ingredient from './ingredient/Ingredient.jsx';
import Pattern from './pattern/Pattern.jsx';

import Drink from './drink/Drink.jsx';

import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';


class Manager extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            view: 'home'
        };
        this.changeView = this.changeView.bind(this);
        this.viewIngredient = this.viewIngredient.bind(this);
        this.viewPattern = this.viewPattern.bind(this);

        this.homeView = this.homeView.bind(this);
        this.notAuthView = this.notAuthView.bind(this);
        this.viewCreateDrink = this.viewCreateDrink.bind(this);


    }
     componentWillMount(){
      this.props.ManagerAct.checkSignIn();
    }
    changeView(page){
        this.setState({
            view : page
        });
    }
    viewCreateDrink(){
        return (
                <Paper>
                    <Drink  createMainDrinkType = {this.props.ManagerAct.createMainDrinkType}
                            clearMessage = {this.props.ManagerAct.clearMessage}
                            managerStore = {this.props.ManagerStore}
                            getListMainDrink = {this.props.ManagerAct.getListMainDrink}
                            drinkStore  = {this.props.DrinkStore}
                            changeMainType= {this.props.ManagerAct.changeMainType}
                            getListIngredient = {this.props.ManagerAct.getListIngredient}
                            createSecondDrinkType  = {this.props.ManagerAct.createSecondDrinkType}
                            createThirdDrinkType  = {this.props.ManagerAct.createThirdDrinkType} 
                            listIngredient= {this.props.IngredientStore.listIngredient}/>
                </Paper>
            )
    }
    viewPattern(){
         return (
            <Pattern  
                        createPattern =  {this.props.ManagerAct.createPattern}
                        clearMessage = {this.props.ManagerAct.clearMessage}
                        managerStore = {this.props.ManagerStore}
                        getListPattern = {this.props.ManagerAct.getListPattern}
                        listPattern = {this.props.PatternStore.listPattern}/>
            )
    }
    viewIngredient(){
         return (
            <Ingredient removeIngredient = {this.props.ManagerAct.removeIngredient}
                        createIngredient =  {this.props.ManagerAct.createIngredient}
                        clearMessage = {this.props.ManagerAct.clearMessage}
                        managerStore = {this.props.ManagerStore}
                        getListIngredient = {this.props.ManagerAct.getListIngredient}
                        listIngredient = {this.props.IngredientStore.listIngredient}/>
            )
    }
 	homeView(){
 		return(
				<Paper style={{padding: 15, marginTop: 25}}>
                    <label className="nice-title">Welcome {this.props.ManagerStore.manager.fullName}</label>
                    <hr/>
                    <List>
                  
                       <ListItem primaryText="Manage Ingredient" leftIcon={  <i className="fa fa-flask" aria-hidden="true"></i>}
                      onClick={() => this.changeView('ingredient')}/>
                      <Divider />
                     
                    <ListItem primaryText="Create Drink Recipe" leftIcon={ <i className="fa fa-glass" aria-hidden="true"></i>}
                    onClick={() => this.changeView('create drink')}
                    />
                    <Divider />
                    
                    <ListItem primaryText="Create pattern" leftIcon={ <i className="fa fa-paint-brush" aria-hidden="true"></i>}
                    onClick={() => this.changeView('pattern')}
                    />

                    </List>
                </Paper>
 			)
 	}
    notAuthView(){
        return(
                <div id="MnSignInUp">
                    <SignIn signInFunc = {this.props.ManagerAct.signIn}
                            clearMessage = {this.props.ManagerAct.clearMessage}
                            managerStore = {this.props.ManagerStore} />
                    <SignUp signUpFunc = {this.props.ManagerAct.signUp}
                            clearMessage = {this.props.ManagerAct.clearMessage}
                            managerStore = {this.props.ManagerStore} />
                </div>
            )
    }
	  render(){
	    return(
	      <z>
             <div id="MnHomePage" className = "col-sm-9" >
				        {this.state.view === 'create drink'?this.viewCreateDrink():null}
                {this.state.view === 'ingredient'?this.viewIngredient():null}
                 {this.state.view === 'pattern'?this.viewPattern():null}

             </div>
             <div className = "col-sm-3">
                 {!this.props.ManagerStore.authenticated?this.notAuthView(): this.homeView()}
             </div>
	      </z>
	    );
	  }
}

const mapStateToProps = state => ({
	ManageDrinkStore: state.ManageDrinkStore,
    ManagerStore: state.ManagerStore,
    DrinkStore: state.DrinkStore,
    IngredientStore: state.IngredientStore,
    PatternStore: state.PatternStore
});

const mapDispatchToProps = dispatch => ({
  ManagerAct: bindActionCreators(ManagerAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Manager);
