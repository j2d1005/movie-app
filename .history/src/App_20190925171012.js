import React from 'react';
import GlobalStyled from "./assets/GlobalStyles";  // reset.css 사용하려면 styled-reset 깔아야함 

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"; // 브라우저 히스토리를 사용해서 구현할 라우터가 BrowserRouter 이고 그걸 불러와서 Router이라고 부르겠다.

import Header from './components/Header'
import HeaderContainer from './containers/HeaderContainer'
// import PopularListContainer from './containers/PopularListContainer';
// import NowPlayingListContainer from './containers/NowPlayingListContainer';
// import UpComingListContainer from './containers/UpComingListContainer';
// import TopRatedListContainer from './containers/TopRatedListContainer';
import SearchContainer from './containers/SearchContainer';
import DetailContainer from './containers/DetailContainer';
import ListContainer from './containers/ListContainer';
import noMovie from './components/NoMoive';
// import Detail from './components/Detail';
import Url from './components/Url';


const App = () => {
    return (
        
        <Router>
            
            <HeaderContainer />
            <div className="wrapper">
                <Switch>
                    {<Redirect exact from="/" to="/now_playing" />} 
                    {/*/로 들어오면 now_playng로이동하도록*/} 
                    <Route path="/now_playing" component={ListContainer} /> 
                    <Route path="/popular" component={ListContainer} />   {/*path랑 api콜하는 주소랑 맞춰서 같이 씀/ 라우터이름을 불러와서 api 콜할것임*/}
                    <Route path="/upcoming" component={ListContainer} />
                    <Route path="/top_rated" component={ListContainer} />
                    <Route path="/search" component={SearchContainer} />
                    <Route exact path="/Detail/:id" component={DetailContainer} />
                    {/* <Route path="/url/:username" component={Url} /> */}
                    <Route component={NoMovie} />
                </Switch>
                {/* <PopularListContainer />
                <NowPlayingListContainer />
                <UpCommingListContainer />
                <TopRatedListContainer /> */}
                <GlobalStyled />
            </div>
        </Router>
    )
};

export default App;
