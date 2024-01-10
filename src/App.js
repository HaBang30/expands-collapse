// === The way 1  ===
// import "./App.css"

// import React, {Component} from "react";

// import ContentExpands from "./ContentExpands";

// class App extends Component {
//   constructor(props){
//     super(props);
//       this.state = {
//         login: false
  
//       }
//   }

//   handleLogIn =() => {
//     this.setState({login: true})
//   }
//   handleLogOut =() => {
//     this.setState({login: false})
//   }
//   render() {
//     if(this.state.login) {
//       return <ContentExpands handleLogOut={this.handleLogOut}/>
//     }
//     return (
//       <div>
//         <h1>Conditional Rendering</h1>
//         <button onClick={this.handleLogIn}>Show Introduction</button>
//       </div>

//     )
//   }
// }

// export default App;


// ==== The way 2 ====
// import "./App.css"

// import React, {Component} from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       login: true
//     }
//   }
//   handleLogIn =() => {
//     let content = document.getElementById("Content");
//     if(this.state.login) {
//       content.style.display = "block"
//     }else {
//       content.style.display = "none"
//     }
//     this.setState({
//       login:!this.state.login
//     })
//   }
//   render() {
//     return (
//       <div>
//           <h1>Conditional Rendering</h1>
//           <button onClick={this.handleLogIn}>{this.state.login? "Show Introduction" : "Close Introduction"}</button>
//           <p id="Content"> In ReactJs, sometimes you have e few  component and depends on  conditions, Example as state, props,... <br/>
//               You want to show one or more component. The  you can to use conditional rendering to render component you want 
//           </p>
//       </div>
      

//     )
//   }
// }
// export default App;


// ==== The Way 3 ======

import "./App.css";

import React, {Component} from "react";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isExpand: false
    }
  }
  showIntroduction =() => {
    this.setState({isExpand:!this.state.isExpand})
  }

  render() {
    
    if(this.state.isExpand) {
      return (<div>
              <h1>Conditional Rendering</h1>
              <button onClick={this.showIntroduction}>Close Introduction</button>
              <h2>Introduction</h2>
              <p> In ReactJs, depend on component condition like state and props....<br/>
                  you want to display one or more components, so you can use conditional rendering to render output component you want
              </p>
            </div>)
        

    } 
    return (
      <div className="container">
        <h1>Conditional Rendering</h1>
        <button onClick={this.showIntroduction}>Show Introduction</button>
        
      </div>

    )
  }
}

export default App;
//====== The End =====