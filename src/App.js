import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Reception from "./Hotel_Management/Reception/ReceptionIndex";
import "./styles.css";

import Login from "./Hotel_Management/Login";

class App extends Component {
  state = {
    Role: "",
    Redirect: ""
  };
  OnSubmit = (Username) => {
    if (Username === "owner") {
    } else if (Username === "manager") {
    } else if (Username === "reception") {
      return <Redirect to="./Hotel_Management/Reception/ReceptionIndex" />;
    }
  };
  render() {
    return (
      <div className="App">
        <Login OnSubmit={this.OnSubmit} />
        {/* <Reception/> */}
      </div>
    );
  }
}
export default App;

// }
// import React, { Component } from "react";

// class Reception extends Component {
//   render() {
//     alert("index");
//     return <div>hello</div>;
//   }
// }

// export default Reception;
