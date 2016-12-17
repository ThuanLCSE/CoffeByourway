import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';




class CustomCup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          imgPaternTagId : 'patternTagId',
          category: [],

          detail: {
              name: '',
              price: 0
          },
          url: '',
          recommend: {
            x:200,
            scale: 0.2,
            rotate: 0,
            y:150
          },

          canvas: {
            height: 100,
            width: 100
          }
        };

        this.editor = this.editor.bind(this);
        this.imageEditor = this.imageEditor.bind(this);
        this.customBar = this.customBar.bind(this);
        this.handleChangeRecommend = this.handleChangeRecommend.bind(this);




    }
    handleChangeRecommend(att, e) {
       var newRecommend = this.state.recommend;
       newRecommend[att] = e.target.value;
       this.setState({
         recommend: newRecommend
       });
   }


     editor(){

       let drawingAreae = {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        width: '100%',
        height: '100%'
      }
      let webKitUser = {
        width: '100%',
        height: '100%',
        WebkitUserSelect : 'none'
      }
      let shirtDiv = {
          width: '100%',
          position: 'relative'
      }
      let shirtFacing = {
          width: '100%',
          height: '100%'
      }

      let platform = {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 100,
        width: '100%',
        height: '100%',

      }

        return(
          <div id="aaa" className="page" style={shirtDiv}>
           <img src='static/PaperCupPatternLayOut.png' style={shirtFacing}></img>
           <div id="drawingArea" style={drawingAreae}>

             <img id="tshirtFacing" className = "shirtLayout" src="static/PaperCupPatternPlatform.png" style={platform}/>

             <canvas id="shirtCanvas" height={this.state.canvas.height}
              width={this.state.canvas.width}
              className="hover" style={webKitUser}>
             </canvas>
           </div>
         </div>
          )
      }


      imageEditor(){
        let styleAlignCenter = {
          minHeight : 32,
          align: 'center'
        }
        let displayBlock = {
          display : 'block'
        }
        let height19 = {
          height : 19
        }

        return(
              <div className="pull-right"  id="imageeditor">
                <RaisedButton  id="remove-selected" label="delete" primary={true}/>
              </div>
          )
      }

      customBar(){

        return (
          <div className="form well">

            <div className="well">
               list logo
            </div>
            <div className = "well">
              Free drawing
            </div>

        </div>
        )
    }


    render() {
      return (
          <div className="container">

              <Paper className="col-sm-4">
              </Paper>

              <Paper className="col-sm-5" style={{height:'80vh'}}>
                        {this.editor()}
                        {this.imageEditor()}
              </Paper>
              <div className="col-sm-3">
                  <Paper style={{height:'80vh'}}>
                       {this.customBar()}
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
