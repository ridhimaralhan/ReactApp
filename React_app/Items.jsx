import React from "react";
import ReactDOM from "react-dom";






  export default  class Items  extends React.Component{

  render() {    
 
        var todoEntries = this.props.entries;

        function createTasks(item) {
         return <li key={item.key}>{item.text}</li>
        }

        var listItems = todoEntries.map(createTasks);

        
  return ( 
   <ul className="theList">
            {listItems}
          </ul>
      

    )
  }
}




