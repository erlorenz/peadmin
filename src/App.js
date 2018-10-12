import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <main className="main">MAIN CONTENT</main>
      </div>
    );
  }
}

export default App;
