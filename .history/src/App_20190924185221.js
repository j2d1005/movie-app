import React from 'react';
import GlobalStyled from "./assets/GlobalStyles";  // reset.css 사용하려면 styled-reset 깔아야함 

import { BrowserRouter as Router, Route } from "react-router-dom"; // 브라우저 히스토리를 사용해서 구현할 라우터가 BrowserRouter 이고 그걸 불러와서 Router이라고 부르겠다.

import Header from './components/Header'
import PopularListContainer from './containers/PopularListContainer';
import NowPlayingListContainer from './containers/NowPlayingListContainer';
import UpComingListContainer from './containers/UpComingListContainer';
import TopRatedListContainer from './containers/TopRatedListContainer';
import DetailContainer from './containers/DetailContainer';
// import Detail from './components/Detail';
import Url from './components/Url';

const App = () => {
    return (
        <Router>
            <Header />
            <div className="wrapper">
                <Route exact path="/" component={ListContainer} />
                <Route path="/Popular" component={ListContainer} />
                <Route path="/UpComing" component={ListContainer} />
                <Route path="/TopRated" component={ListContainer} />
                <Route exact path="/Detail/:id" component={DetailContainer} />
                <Route path="/url/:username" component={Url} />
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
