import React, { Component } from 'react';
import './App.css';
import Envelope from './components/Envelope/Envelope'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Envelope />
      </div>
    );
  }
}

export default App;
