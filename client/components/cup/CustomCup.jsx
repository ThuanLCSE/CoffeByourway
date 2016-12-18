import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
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
    recipeThirdItem(recipe){
   
       return(
        <z key= {recipe._id}>
          <z className="col-sm-3">{recipe.type}</z>  
              <z className="col-sm-3">
              <img height="20" width="20" onClick={() => this.chooseThirdRecipe(recipe)} 
              src={hostServer +recipe.icon} />
              </z> 
              <z className="col-sm-3">{recipe.price} $</z> 
        </z>
      )
     
    }

    goThirdStep(){
      this.setState({custom: 'ingredient'})
      this.props.getListThirdRecipe(this.props.drinkStore.currentMainDrink);
      this.setState({
        step: "third"
      });
    }
    goSecondStep(type){
      this.setState({custom: 'ingredient'})
      this.props.getListSecondRecipe(type);
      this.setState({
        step: "second"
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
          <button onClick={this.goThirdStep}>Next step</button>
        </div>
        )
    }
    listThirdRecipe(){
      return(
        <div>
          Level 1
          {this.props.drinkStore.listThirdRecipe.map((recipe) => this.recipeThirdItem(recipe))}
          <br/>
           <button onClick={this.checkOutCup}>Finish</button>
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
            <div className="container">

                <div className="col-sm-4">
                  <DrawingControl customPattern = {() => this.setState({custom: 'pattern'})}/>
                  {this.listPattern()}
                </div>

                <Paper className="col-sm-5" style={{height:'80vh'}}>
                          <CanvasEditor custom = {this.state.custom}/>
                          {this.reportIngredient()}
                </Paper>
                <div className="col-sm-3">

                    <Paper style={{height:'80vh'}}>
                         
                        Current Type: {this.props.drinkStore.currentMainDrink}
                        {this.state.step === "second"?this.listSecondRecipe():null}
                        {this.state.step === "third"?this.listThirdRecipe():null}
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
