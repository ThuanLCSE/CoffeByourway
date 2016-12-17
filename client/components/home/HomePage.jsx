import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';



const coverHome = {

}

class HomePage extends React.Component{
  constructor(props){
    super(props);
  };


  render(){
    let centerDiv = {
      textAlign: 'center',
      margin: '50 auto',
      padding: '20% 0',
      height: '100%'
    }
    let fullHeight = {
        height: '100vh'
    }
    let buttonDiv = {
        marginBottom: '50px'
    }



    return (
      <div className = "container-fluid" style={fullHeight}>
        <div className = "row">
            <div className = "col-sm-6">
              <div className = "col-sm-12" style={buttonDiv}>
                <RaisedButton  label="Create New Coffee"/>
              </div>
              <div className = "col-sm-12">
                <RaisedButton label="Get Your Collection"/>
              </div>
            </div>
        </div>
      </div>
    );
  }
};

export default HomePage;
