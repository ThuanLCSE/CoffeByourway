import React from 'react';
import Paper from 'material-ui/Paper'; 
import {hostServer} from './../../constant/ApiUri'; 
import CanvasEditor from './../utils/CanvasEditor.jsx'; 

class CustomCup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
       


    }
   

    render() {
        return (
            <div className="container">
            
                <div className="col-sm-3">
                 
            
                </div>
 
                <Paper className="col-sm-5"> 
                          <CanvasEditor />  
                </Paper>
                <Paper className="col-sm-3">
          
                </Paper>
                
            </div>
        );
    }
}
export default CustomCup;
