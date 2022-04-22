/* eslint-disable class-methods-use-this */
import React from 'react';
import './App.css';
/* eslint-disable-next-line no-unused-vars */
import Calculator from './components/calculator';

class App extends React.Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
