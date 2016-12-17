import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog'; 
import {hostServer} from './../../constant/ApiUri';
 
import CanvasEditor from './../utils/CanvasEditor.jsx';  
import DrawingControl from './../utils/DrawingControl.jsx';  

class CustomCup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     
          
        };
     
        this.submitAfterHavePreview = this.submitAfterHavePreview.bind(this);
         
           // this.colorItem = this.colorItem.bind(this);

 
         // this.drawingControl = this.drawingControl.bind(this); 
         // this.colorCheckList = this.colorCheckList.bind(this);
         // this.drawingControl = this.drawingControl.bind(this);
         // this.callAddPatternToShirt = this.callAddPatternToShirt.bind(this);
         // this.handleChangeRecommend = this.handleChangeRecommend.bind(this); 


    }

    componentDidMount(){ 
      setTimeout(function(){
          this.callApplyShirtCanvas(); 
      }.bind(this),1000);
         
    }
    

    callAddPatternToShirt(top, left, scale){
      var patternId = this.state.imgPaternTagId;
      var addPatternToShirt = document.getElementById('addPatternToShirt').click(patternId, top, left, scale); 
    }

    callApplyShirtCanvas(){ 
      document.getElementById('applyCupCanvas').click(); 
    }
    callApplyColorChange(){ 
     document.getElementById('applyColorChange').click(); 
    }
    componentDidUpdate(prevProps, prevState){
     
      
    } 
  
    takePreviewBeforSubmit() {
      document.getElementById('screenShot').click(); 
    }
    submitAfterHavePreview(e) {
       console.log('submit')
    }
    
    
    
    render() {
        return (
            <div className="container">
            
                <div className="col-sm-3">
                   <DrawingControl/>
                </div>
 
                <Paper className="col-sm-5" style={{height:'80vh'}}> 
                          <CanvasEditor />  
                </Paper>
                <div className="col-sm-3">
         
                    <Paper style={{height:'80vh'}}>
                        
                    </Paper>
                </div>
                  <input type="hidden" id="patternTop"
                  onClick = {(e) => this.handleChangeRecommend('x', e)} />
                  <input type="hidden" id="patternLeft"
                  onClick = {(e) => this.handleChangeRecommend('y', e)} />
                    <input type="hidden" id="patternScale"
                  onClick = {(e) => this.handleChangeRecommend('scale', e)} />
                  <input type="hidden" id="patternAngle"
                  onClick = {(e) => this.handleChangeRecommend('rotate', e)} />
                  <input type="hidden" id="screenShotUrl"
                  onClick = {(e) => this.submitAfterHavePreview(e)} />
                  
            </div>
        );
    }
}
export default CustomCup;
