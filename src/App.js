import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/Header';
import Shape from './pages/Shape';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/shape">
            <Shape />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
