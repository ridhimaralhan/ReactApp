import React from "react";
import ReactDOM from "react-dom";

import Items from './Items.jsx';



  export default  class List  extends React.Component{

constructor() {
     super();
      this.state = {
      items : [],
      }
 this.addItem = this.addItem.bind(this);

      }   
     

    
addItem(e) {
  var itemArray = this.state.items;
   
  itemArray.push(
  {text: this._inputElement.value,
    key: Date.now()});
 
  this.setState({
    items: itemArray
  })
 this._inputElement.value = "";
 
  e.preventDefault();
};


  render() {
    return (
      <div className="ListMain">
          <div className="header">
            <form onSubmit={this.addItem}>
              <input  ref = {(a) => this._inputElement=a}
                placeholder="enter task">
               </input>
              <button type="submit">add</button>
            </form>
          </div> 
          <Items entries={this.state.items}/>     
        </div>
    )
  }
}


ReactDOM.render(
  <div>
    <List/>
  </div>,
  document.querySelector("#container")
);


