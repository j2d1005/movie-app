import React, {Component} from 'react';
import axios from "axios";  // data를 fatch를 하기 위해 사용한다.
// fetch위에 감싸진 layer라고 볼 수 있다.
// 사용하기 위해 npm install axios 

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => { // async를 씀으로 awiat 가 사용 가능. 
    // awiat 는 이 axios 함수가 완료될떄까지 기다린 후 다음 함수 실행 // 비동기 처리 방식의 해결? 

    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    // console.log(movies.data.data.movies); // => {data: {data: {movies} } }
    // JSONView 라는 크롬 확장프로그램을 설치하면 json파일을 이쁘게 볼 수 있다.
    const {data: {data: {movies} } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")// ?sort_by=rating은 rating순으로 정렬하겠다 는 뜻 api에서 옵션 찾을수 있음

    console.log(movies);
    // this.setState({movies : movies}); // =>  this.setState({ movies }); 로 줄이는 것 가능 
    this.setState({ 
      movies ,
      isLoading : false
    });

    
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
