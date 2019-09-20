import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => { // async를 씀으로 awiat 가 사용 가능.  awiat 는 이 axios 함수가 완료될떄까지 기다려라 ??
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
  }
  
  componentDidMount(){ // api가 마운트 된 후에 작동한다 . render 후에 작동 
    this.getMovies();
  }
  render(){
    const { isLoading } = this.state;
    return (      
      <div className="App" >{isLoading ? "Loading..." : "we are ready"}</div>
    );
  }
}

export default App;
