import React from 'react';  

class CanvasEditor extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {           
            listColorDefault : [

              {key: 1, value: '#ffffff', name: '#ffffff'},
              {key: 19, value: '#0277BD', name: '#0277BD'},
              {key: 16, value: '#EC407A', name: '#EC407A'},
              {key: 15, value: '#9C27B0', name: '#9C27B0'},
              {key: 13, value: '#212121', name: '#212121'},
              {key: 232, value: '#FF5722', name: '#FF5722'},
              {key: 56, value: '#2ecc71', name: '#2ecc71'},
              {key: 12, value: '#e67e22', name: '#e67e22'},
              {key: 23, value: '#e74c3c', name: '#e74c3c'},
              {key: 34, value: '#c0392b', name: '#c0392b'},
              {key: 45, value: '#E08283', name: '#E08283'},
              {key: 343, value: '#9B59B6', name: '#9B59B6'},
              {key: 167, value: '#4183D7', name: '#4183D7'},
              {key: 78, value: '#87D37C', name: '#87D37C'},
              {key: 89, value: '#36D7B7', name: '#36D7B7'},
              {key: 90, value: '#26C281', name: '#26C281'}
           ]
        };
      
        this.colorCheckList = this.colorCheckList.bind(this); 
        this.colorControl = this.colorControl.bind(this);


    } 
    colorItem(color){ 
      let colorPick = {
        backgroundColor: color.value,
        width: '10px', 
          height: '10px'
      }


       return (
                    <button className="colorPicker" key = {color.key} 
                              style = {colorPick} ></button>
        )
    }
    colorCheckList(){
      return (
            <div>
                {this.state.listColorDefault.map(this.colorItem)}
            </div>
        )
    }

    colorControl(){ 
        return (
          <div className="form well">
            {this.colorCheckList()}
          </div>
        )
    }
    
    render() { 
        return (
           <div>
           		{this.colorControl()} 
           </div>
        );
    }
}

export default CanvasEditor;