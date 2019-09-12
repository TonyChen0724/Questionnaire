import React, { Component } from "react";
import logo from "./asset/Endless-Constellation.svg";
import "./App.css";
import Home from "./component/Home";
import Quiz from "./component/Quiz";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Quiz} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
