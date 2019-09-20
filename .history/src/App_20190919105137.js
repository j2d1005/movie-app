import React, {Component} from 'react';

class App extends Component {
  state = {
    isLoading: true
  }
  componentDidMount(){
    setTimeout(function(){
      this.setState({isLoading : false})
    });
  }
  render(){
    const { isLoading } = this.state;
    return (      
      <div className="App" >{isLoading ? "Loading..." : "we are ready"}</div>
    );
  }
}

export default App;
