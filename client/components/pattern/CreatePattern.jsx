
import React from 'react';  

import DialogMessage from './../utils/DialogMessage'; 
import UploadImg from './../utils/UploadImg'; 

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class CreatePattern extends React.Component{
   constructor(props){
        super(props);
        this.state = { 
            pattern: {
                url: ''
            }, 
            error: ''
        };
        this.submitPatt = this.submitPatt.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onUrlChange = this.onUrlChange.bind(this);
  
    }


    submitPatt() {
	 
		 var newPatt = this.state.pattern;
   		 this.props.createPattern(newPatt); 
    }

    handleChange(att, e) {
        var newPatt = this.state.pattern;
        newPatt[att] = e.target.value;
        this.setState({
          pattern: newPatt
        }); 
    }
    onUrlChange(url){
      var fakeEvent = {
        target: {
          value: url
        }
      }
      this.handleChange('url',fakeEvent)
    }
     

    render(){
        return (
            <div>
                
                <UploadImg buttonName="Up picture of pattern" 
                           setUrl = {this.onUrlChange}/><br/>
             
                <RaisedButton label="Create" primary={true} onClick={this.submitPatt}/><br/><br/>
                <DialogMessage closeMessage = {this.props.clearMessage}
                               message= {this.props.managerStore.message}/>
            </div>
        );
    }
};

export default CreatePattern;