import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }
  componentDidMount(){
    setTimeout( () => {
      this.setState({isLoading : false})
    },2000);
  }
  render(){
    const { isLoading } = this.state;
    return (      
      <div className="App" >{isLoading ? "Loading..." : "we are ready"}</div>
    );
  }
}

export default App;
