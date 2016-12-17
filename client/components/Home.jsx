import React from 'react';


// Component
import  HomePage from './home/HomePage.jsx';
import CustomCup from './cup/CustomCup.jsx';


// action
import * as CustomerAct from './../actions/CustomerAction.jsx';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            view: 'home'
        };
        this.changeStateView = this.changeStateView.bind(this);
        this.homeView = this.homeView.bind(this);
        this.CustomCup = this.CustomCup.bind(this);

    }




    changeStateView(page){
        this.setState({
            view : page
        });
    }


 	homeView(){
 		return(
 				<HomePage
           changeView = {this.changeStateView}
        />
 			)
 	}
  CustomCup(){
      return(
          <CustomCup

          />
      )
  }
	  render(){
	    return(

	      <z>
	        {this.state.view === 'home'?this.homeView():null}
          {this.state.view === 'customCup'?this.CustomCup():null}
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
