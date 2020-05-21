import React, { Component } from 'react';
import Results from './components/Result';
import Buttons from './components/Buttons';
 
class App extends Component {
  render() { 
    return (
      <div>
        <Results />
        <Buttons />
      </div>
    );
  }
}
 
export default App;