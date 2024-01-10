import React, {Component} from "react";

class ContentExpands extends Component {
  // constructor(props){
  //   super(props);
  //     this.state = {
        
  
  //     }
  // }


  render() {
    return (
      <div>
        <h1>Conditional Rendering</h1>
        <button onClick={this.props.handleLogOut}>Close Introduction</button>
        <p>In ReactJs, sometimes you have e few  component and depends on  conditions, Example as state, props,... <br/>
            You want to show one or more component. The  you can to use conditional rendering to render component you want 
         </p>
      </div>

    )
  }
}

export default ContentExpands;