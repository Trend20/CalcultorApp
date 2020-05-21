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
  onClick = button => {

    if(button === "="){
        this.calculate()
    }

    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
    }

    else {
        this.setState({
            result: this.state.result + button
        })
    }
};
  // basic operations
  calculate = () =>{
    try{
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    }catch(e){
      this.setState({
        result: "error",
      })
    }
  };

  reset = () =>{
    this.setState({
      result:"",
    })
  };

  backSpace = () =>{
    this.setState({
      result: this.state.result.slice('0 , -1')
    })
  };
  render() { 
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <Results result={this.state.result}/>
          <Buttons onClick={this.onClick}/>
        </div>
      </div>
    );
  }
}
 
export default App;