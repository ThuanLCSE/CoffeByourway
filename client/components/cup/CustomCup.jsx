import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  Step,
  Stepper,
  StepButton
} from 'material-ui/Stepper';

import Dialog from 'material-ui/Dialog';
import {hostServer} from './../../constant/ApiUri';
import WaitingModal from './../utils/WaitingModal.jsx';  
import ChooseMainTypeModal from './ChooseMainTypeModal.jsx';  

import CanvasEditor from './../utils/CanvasEditor.jsx';
import DrawingControl from './../utils/DrawingControl.jsx';

class CustomCup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     
            step: 'first',
            custom: 'ingredient'
        };

        this.submitAfterHavePreview = this.submitAfterHavePreview.bind(this);

           // this.colorItem = this.colorItem.bind(this);

        
         this.waitingProgress = this.waitingProgress.bind(this); 
         this.chooseMainTypeModal = this.chooseMainTypeModal.bind(this);
         this.recipeItem = this.recipeItem.bind(this); 
         this.goThirdStep = this.goThirdStep.bind(this);
         this.goSecondStep = this.goSecondStep.bind(this);
         this.listSecondRecipe = this.listSecondRecipe.bind(this);
          this.listPattern = this.listPattern.bind(this);
         this.listThirdRecipe = this.listThirdRecipe.bind(this);
         this.recipeThirdItem = this.recipeThirdItem.bind(this);
         this.checkOutCup = this.checkOutCup.bind(this);
         this.reportIngredient = this.reportIngredient.bind(this);
         this.handleNext = this.handleNext.bind(this);
         this.handlePrev = this.handlePrev.bind(this);
 


    }
    componentWillMount(){ 
        this.props.getFirstStepCustomData();
         this.props.getListPattern();
    }
     
    componentDidUpdate(prevProps, prevState){
      var prePropsNotLoadYet = (prevProps.drinkStore.listMainDrink.length === 0) || (prevProps.patternStore.listPattern.length === 0);
      var nowLoaded =  (this.props.drinkStore.listMainDrink.length > 0)  && (this.props.patternStore.listPattern.length > 0);
      if (  prePropsNotLoadYet   && nowLoaded){
        this.callApplyCupCanvas(); 
        this.callApplyPatternFunc();
      } 

  
    } 

    callApplyCupCanvas(){ 
      document.getElementById('applyCupCanvas').click(); 
    }
    callApplyPatternFunc(){
     document.getElementById('addPatternToShirt').click();
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
      document.getElementById('handleIngredientPattern').value = recipe.img;
      document.getElementById('handleIngredientPattern').click(recipe.level);
      this.props.addSecondRecipe(recipe);
      this.setState({custom: 'ingredient'})
    }
    chooseThirdRecipe(recipe){
      document.getElementById('handleIngredientPattern').value = recipe.img;
      document.getElementById('handleIngredientPattern').click("4");
      this.props.addThirdRecipe(recipe);
      this.setState({custom: 'ingredient'})
    }
    recipeItem(recipe, level){
      if (level === recipe.level){
         return(
          <Paper className="recipeItem"
                key= {recipe._id}
                onClick={() => this.chooseSecondRecipe(recipe)}>
            <div className="recipeItemDetail">
                <div className="col-sm-6" style={{padding:0}}>
                <img height="100" width="100%" src={hostServer +recipe.icon} />
                </div>
                <div className="col-sm-6"><h4>{recipe.type}</h4></div>  
                <div className="col-sm-6"><h4><span className="fa fa-usd" style={{color:'green'}}></span>{recipe.price}</h4></div> 
            </div>
          </Paper>
        )
       } else {
        return (
            <div></div>
          )
       }
     
    }
    recipeThirdItem(recipe){
   
       return(
        <Paper className="recipeItem"
                key= {recipe._id}
                onClick={() => this.chooseThirdRecipe(recipe)}>
            <div className="recipeItemDetail">
                <div className="col-sm-6" style={{padding:0}}>
                <img height="100" width="100%" src={hostServer +recipe.icon} />
                </div>
                <div className="col-sm-6"><h4>{recipe.type}</h4></div>  
                <div className="col-sm-6"><h4><span className="fa fa-usd" style={{color:'green'}}></span>{recipe.price}</h4></div> 
            </div>
        </Paper>
      )
     
    }
    
    handleNext() {
        if (this.state.step == 'second') {
          this.goThirdStep();
        }
      };

      handlePrev() {
        if (this.state.step == 'third') {
          this.goSecondStep(this.props.drinkStore.currentMainDrink);
        }
      };
    
    goThirdStep(){
      this.setState({custom: 'ingredient'})
      this.props.getListThirdRecipe(this.props.drinkStore.currentMainDrink);
      this.setState({
        step: 'third'
      });
    }
    goSecondStep(type){
      this.setState({custom: 'ingredient'})
      this.props.getListSecondRecipe(type);
      this.setState({
        step: 'second'
      });
    }
    checkOutCup(){
      console.log(this.props.customCup)
    }
    listSecondRecipe(){
      return(
        <div>
          Level 1
          {this.props.drinkStore.listSecondRecipe.map((recipe) => this.recipeItem(recipe,"1"))}
          <br/>
           Level 2
          {this.props.drinkStore.listSecondRecipe.map((recipe) => this.recipeItem(recipe,"2"))}
          <br/>
           Level 3
          {this.props.drinkStore.listSecondRecipe.map((recipe) => this.recipeItem(recipe,"3"))}
          <br/>
           Level 4
          {this.props.drinkStore.listSecondRecipe.map((recipe) => this.recipeItem(recipe,"4"))}
        </div>
        )
    }
    listThirdRecipe(){
      return(
        <div>
          Level 4
          {this.props.drinkStore.listThirdRecipe.map((recipe) => this.recipeThirdItem(recipe))}
        </div>
        )
    }
    ingredientItem(ingredient){
      return(
          <div>
            <img width="10px" height="10px" src={hostServer+ ingredient.icon}/>{ingredient.type}: {ingredient.quantity}
          </div>
        )
    }
    reportIngredient(){
      var ingreList = [];
      for (var i in this.props.customCup.listSecondRecipe){
        var newIngre = this.props.customCup.listSecondRecipe[i];
             for (var j in ingreList){
              if (ingreList[j].type === newIngre.type){
                ingreList[j].quantity += newIngre.quantity;
                newIngre = null;
              }
             }
           if (newIngre) {
            ingreList.push(newIngre);
           }
      }
      return(
        <div>
          {ingreList.map((ingredient) => this.ingredientItem(ingredient))}
        </div>
        )
    }
    patternItem(pattern){
      return(
          <div>
            <img width="50px" height="50px" className="patternPicker"
            onClick={() => this.setState({custom: 'pattern'})}
             src={hostServer+ pattern.url}/>
          </div>
        )
    }
    listPattern(){
       return(
        <div> 
          {this.props.patternStore.listPattern.map((patt) => this.patternItem(patt))} 
        </div>
        )
    }
    render() {
        return (
            <div className="container" style={{backgroundColor:'white'}}>

                <div className="col-sm-3">
                  <DrawingControl customPattern = {() => this.setState({custom: 'pattern'})}/>
                  {this.listPattern()}
                </div>

                <Paper className="col-sm-5" style={{height:'100vh'}}>
                          <CanvasEditor custom = {this.state.custom}/>
                          {this.reportIngredient()}
                </Paper>
                <div className="col-sm-4">

                    <Paper style={{padding: 15, marginTop: 25}}>
                         
                         
                         <Stepper linear={false} activeStep={this.state.step}>
                          <Step>
                            <StepButton onClick={() => this.setState({step: 'first'})}></StepButton>
                          </Step>
                          <Step>
                            <StepButton onClick={() => this.setState({step: 'second'})}></StepButton>
                          </Step>
                          <Step>
                            <StepButton onClick={() => this.setState({step: 'third'})}></StepButton>
                          </Step>
                        </Stepper>
                        <div>
                          Current Type: {this.props.drinkStore.currentMainDrink}
                            {this.state.step === 'second' ? this.listSecondRecipe():null}
                            {this.state.step === 'third' ?this.listThirdRecipe():null}
                          <div style={{marginTop: 12}}>
                            <FlatButton
                              label="Back"
                              disabled={this.state.step === 'first'}
                              onTouchTap={this.handlePrev}
                              style={{marginRight: 12}}
                            />
                            <RaisedButton
                              label="Next"
                              disabled={this.state.step === 'third'}
                              primary={true}
                              onTouchTap={this.handleNext}
                            />
                          </div>
                        </div>
                         
                         
                        
                    </Paper>
                </div>
                 {(this.props.drinkStore.listMainDrink.length <= 0) ?this.waitingProgress():this.chooseMainTypeModal()} 
                  
                  <input type="hidden" id="screenShotUrl"
                  onClick = {(e) => this.submitAfterHavePreview(e)} />
                   
                  
            </div>
        );
    }
}
export default CustomCup;
