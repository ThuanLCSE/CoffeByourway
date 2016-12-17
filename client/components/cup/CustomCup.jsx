import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog'; 
import {hostServer} from './../../constant/ApiUri';
 
import CanvasEditor from './../utils/CanvasEditor.jsx';  
import DrawingControl from './../utils/DrawingControl.jsx';  
import WaitingModal from './../utils/WaitingModal.jsx';  
import ChooseMainTypeModal from './ChooseMainTypeModal.jsx';  


class CustomCup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     
            step: 'first'
        };
     
        this.submitAfterHavePreview = this.submitAfterHavePreview.bind(this);
         
           // this.colorItem = this.colorItem.bind(this);

 
         this.waitingProgress = this.waitingProgress.bind(this); 
         this.chooseMainTypeModal = this.chooseMainTypeModal.bind(this);
         this.recipeItem = this.recipeItem.bind(this);
         this.listSecondRecipe = this.listSecondRecipe.bind(this);
         this.goThirdStep = this.goThirdStep.bind(this);
         this.goSecondStep = this.goSecondStep.bind(this);
         this.listSecondRecipe = this.listSecondRecipe.bind(this);
         this.listThirdRecipe = this.listThirdRecipe.bind(this);
         


         // this.handleChangeRecommend = this.handleChangeRecommend.bind(this); 


    }
    componentWillMount(){ 
        this.props.getFirstStepCustomData();
    }
    
    componentDidMount(){ 
      setTimeout(function(){
          this.callApplyCupCanvas(); 
      }.bind(this),1000);
         
    }
    componentDidUpdate(prevProps, prevState){
     
      if (this.props.drinkStore.listMainDrink.length > 0){
        this.callApplyCupCanvas(); 
      } 
  
    }
    

    callAddPatternToShirt(top, left, scale){
      var patternId = this.state.imgPaternTagId;
      var addPatternToShirt = document.getElementById('addPatternToShirt').click(patternId, top, left, scale); 
    }

    callApplyCupCanvas(){ 
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
    waitingProgress(){
        return(
          <div>
           <WaitingModal openCondition= {this.props.drinkStore.listMainDrink.length<= 0}/>
          </div>
        )
    }
    chooseMainTypeModal(){
        return(
           <ChooseMainTypeModal changeMainType = {this.props.changeMainType}
                          goSecondStep = {this.goSecondStep}
                         openCondition= {this.props.drinkStore.listMainDrink.length > 0}
                            listMainType = {this.props.drinkStore.listMainDrink}/>
        )
    }
    chooseSecondRecipe(recipe){
      this.props.addSecondRecipe(recipe);
    }
    recipeItem(recipe, level){
      if (level === recipe.level){
         return(
          <z key= {recipe._id}>
            <z className="col-sm-3">{recipe.type}</z>  
                <z className="col-sm-3">
                <img height="20" width="20" onClick={() => this.chooseSecondRecipe(recipe)} 
                src={hostServer +recipe.icon} />
                </z> 
                <z className="col-sm-3">{recipe.price} $</z> 
          </z>
        )
       } else {
        return (
            <z></z>
          )
       }
     
    }
    goThirdStep(){
      this.props.getListThirdRecipe(this.props.drinkStore.currentMainDrink);
      this.setState({
        step: "third"
      });
    }
    goSecondStep(type){
      this.props.getListSecondRecipe(type);
      this.setState({
        step: "second"
      });
    }
// 
    listSecondRecipe(){
      return(
        <div>
          Level 1
          {this.props.drinkStore.listSecondRecipe.map((recipe) => this.recipeItem(recipe,1))}
           Level 2
          {this.props.drinkStore.listSecondRecipe.map((recipe) => this.recipeItem(recipe,2))}
           Level 3
          {this.props.drinkStore.listSecondRecipe.map((recipe) => this.recipeItem(recipe,3))}
           Level 4
          {this.props.drinkStore.listSecondRecipe.map((recipe) => this.recipeItem(recipe,4))}
          <button onClick={this.goThirdStep}>Next step</button>
        </div>
        )
    }
    listThirdRecipe(){
      return(
        <div>
          Level 1
          {this.props.drinkStore.listThirdRecipe.map((recipe) => this.recipeItem(recipe,1))}
           Level 2
          {this.props.drinkStore.listThirdRecipe.map((recipe) => this.recipeItem(recipe,2))}
           Level 3
          {this.props.drinkStore.listThirdRecipe.map((recipe) => this.recipeItem(recipe,3))}
           Level 4
          {this.props.drinkStore.listThirdRecipe.map((recipe) => this.recipeItem(recipe,4))}
        </div>
        )
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
                        Current Type: {this.props.drinkStore.currentMainDrink}
                        {this.state.step === "second"?this.listSecondRecipe():null}
                        {this.state.step === "third"?this.listThirdRecipe():null}
                    </Paper>
                </div>
                 {(this.props.drinkStore.listMainDrink.length <= 0) ?this.waitingProgress():this.chooseMainTypeModal()} 
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
