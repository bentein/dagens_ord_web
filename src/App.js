import React, { Component } from 'react';
import './App.css';
import Wordform from './components/Wordform.js';

class App extends Component {
  render() {
    return (
      <div className="wordformWrapperOuter">
        <Wordform />
      </div>
    );
  }
}

export default App;
