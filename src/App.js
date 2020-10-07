import React, { Component } from "react";
import "./styles.css";

import Login from "./Hotel_Management/Login";

class App extends Component {
  state = {
    Role: ""
  };
  OnSubmit = (Username) => {
    if (Username === "owner") {
    } else if (Username === "manager") {
    } else if (Username === "reception") {
    }
  };
  render() {
    return (
      <div className="App">
        <Login OnSubmit={this.OnSubmit} />
      </div>
    );
  }
}

export default App;
