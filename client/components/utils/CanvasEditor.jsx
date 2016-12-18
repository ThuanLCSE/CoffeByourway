import React from 'react';
import {hostServer} from './../../constant/ApiUri';
import RaisedButton from 'material-ui/RaisedButton';

class CanvasEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canvas: {
              height: 200,
              width: 200
            },
            cup: {
              bot: 0,
              height: 0
            }
        };

        this.mainCanvas = this.mainCanvas.bind(this);

    }
    componentDidMount() {
        var mountedCanvas = this.state.canvas;
        var mountedCup = this.state.cup;
        // document.getElementById('cupPicture')
        mountedCanvas.width = this.refs.cupPicture.clientWidth;
        mountedCanvas.height = mountedCanvas.width * 3/2;

        mountedCup.bot = this.refs.cupPicture.clientWidth*39/126;
        mountedCup.height = this.refs.cupPicture.clientWidth * 27/100;

        this.setState({ canvas: mountedCanvas,
                        cup:  mountedCup
                });
    }
    canvasControl(){
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
                <RaisedButton  id="remove-selected" label={<i className="fa fa-trash" aria-hidden="true"> Remove</i>} secondary={true}/>
              </div>
          )
      }
   	mainCanvas(){

        let drawingAreae = {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 100,
          width: '100%',
          height: '100%',
          display: this.props.custom==='ingredient'?'none':'block'
        }
        let webKitUser = {
          width: '100%',
          height: '100%',
          WebkitUserSelect : 'none'
        }
        let cupShot = {
            width: '100%',

            position: 'relative'
        }
        let cupLayout = {
            width: '100%',
            height: '100%'
        }
        let platform = {
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 101,
          width: '100%',
          height: '100%',

        }


        let dividedDiv  = {
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          height:this.state.cup.height,
          width:this.state.canvas.width/2
        }

        return(
              <div id="cupShot" className="page" style={cupShot}>
              {this.props.custom === 'ingredient'? 
              <z>
              <img src={hostServer +  "static/PaperCupDrinkPlatform.png"} style={cupLayout}></img>
              
              </z>
              :<img src={hostServer +  "static/PaperCupPatternPlatform.png"} style={cupLayout}></img>}
                 <div style={{display: this.props.custom==='ingredient'?'block':'none', position: 'absolute', top:this.state.cup.bot, right: 0}}>
                        <div id="level4"
                          style = {dividedDiv}
                        >
                        </div>
                        <div id="level3"
                          style = {dividedDiv}
                        >
                        </div>
                        <div id="level2"
                         style = {dividedDiv}
                        >
                        </div>
                        <div id="level1"
                          style = {dividedDiv}
                        >
                        </div>

                  </div>
                  {this.props.custom === 'ingredient'? 
                     <img ref="cupPicture" src={hostServer +  "static/PaperCupDrinkLayOut.png"}
                      className = "cupLayout" style={platform}/>
                     :<img ref="cupPicture" src={hostServer +  "static/PaperCupPatternLayOut.png"}
                      className = "cupLayout" style={platform}/>}
                    <div 
                    id="drawingArea" style={drawingAreae}>
                     
                      
                      <canvas id="cupCanvas"
                      height={this.state.canvas.height}
                      width={this.state.canvas.width}
                       className="hover" style={webKitUser}>
                      </canvas>
                    </div>
              </div>
        )
      // }
    }
    render() {
        return (
           <div>
           		{this.mainCanvas()}
                {this.canvasControl()}
           </div>
        );
    }
}

export default CanvasEditor;
