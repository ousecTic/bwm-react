import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

//header is a function component
import { Header } from "./shared/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />I am app component
      </div>
    );
  }
}

export default App;
