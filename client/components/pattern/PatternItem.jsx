import React from 'react';
import {hostServer} from './../../constant/ApiUri';
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox';



class patternItem extends React.Component{
  constructor(props){

    super(props);
    this.state = { 
    } 

  }  
  render(){
      return (
       
          <div className="col-sm-3">
            <img className="img-responsive" src={hostServer +this.props.pattern.url}
            style={{height: '80px', width: '80%'}}

            />
          </div> 
        );
    }
};


export default patternItem;
