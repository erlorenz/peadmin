import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Active from './components/Active';
import Order from './components/Order';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="main">
          <Order />
        </div>
      </div>
    );
  }
}

export default App;
