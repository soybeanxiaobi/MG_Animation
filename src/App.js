import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "zent/css/index.css";
import Header from "./pages/Header";
import { Zan, MoExample, Transform, AEMg, Lightroom } from './pages';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="content">
            <Route path="/zan" component={Zan} />
            <Route path="/mo-example" component={MoExample} />
            <Route path="/mg" component={Transform} />
            <Route path="/ae-mg" component={AEMg} />
            <Route path="/lightroom" component={Lightroom} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
