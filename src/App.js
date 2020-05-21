import React, { Component } from 'react';
import Results from './components/Result';
import Buttons from './components/Buttons';
 
class App extends Component {
  constructor(props){
    super(props);

    this.state={
      result:'',
    }
  }
  render() { 
    return (
      <div>
        <div className="calculator">
          <h1>Simple Calculator</h1>
          <Results result={this.state.result}/>
          <Buttons onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}
 
export default App;