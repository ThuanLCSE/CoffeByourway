import React from 'react';   

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 

import Welcome from './home/Welcome.jsx';  
import * as CustomerAct from './../actions/CustomerAction.jsx';  

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            view: 'home'
        };
        this.changeStateView = this.changeStateView.bind(this); 
    }   
    changeStateView(page){
        if (page === 'NewPattern' || page === 'CustomShirt'){
          document.getElementById("resetCanvas").click();
        }
        this.setState({
            view : page
        });
    }
 	homeView(){
 		return(
 				<Welcome/>
 			)
 	}
	  render(){
	    return(

	      <z> 
	        {this.state.view === 'home'?this.homeView():null} 
	      </z>
	    );
	  }
}

const mapStateToProps = state => ({ 
    CustomerStore: state.CustomerStore,
	DrinkStore: state.DrinkStore,
	CustomCupStore: state.CustomCupStore
});

const mapDispatchToProps = dispatch => ({ 
  CustomerAct: bindActionCreators(CustomerAct, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
