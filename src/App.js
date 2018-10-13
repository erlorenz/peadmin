import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Active from './components/Active';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Active />
      </div>
    );
  }
}

export default App;
