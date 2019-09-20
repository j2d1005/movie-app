import React, {Component} from 'react';

class App extends Component {
  state = {
    isloading: true
  }
  render(){
    const { isLoading } = this.state;
    return (      
      <div className="App" >{isLoadin ? "Loading" : "we are ready"}</div>
    );
  }
}

export default App;
