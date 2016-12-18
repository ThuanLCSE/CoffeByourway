
import React from 'react';  

import CreatePattern from './CreatePattern'; 
import ListPattern from './ListPattern'; 

import Paper from 'material-ui/Paper';

class  Pattern extends React.Component{
   constructor(props){
        super(props);
        this.state = {  
        };
     
    }

    render(){
        return (
            <Paper style={{padding: 15, marginTop: 25, overflow:'auto'}}>
                <CreatePattern createPattern = {this.props.createPattern}
                                  clearMessage = {this.props.clearMessage}
                                  managerStore = {this.props.managerStore}/>
                <ListPattern getListPattern = {this.props.getListPattern}
                                listPattern = {this.props.listPattern} />
            </Paper>
        );
    }
};

export default Pattern;