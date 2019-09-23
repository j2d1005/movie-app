import React from 'react';
import GlobalStyled from "./assets/GlobalStyles";  // reset.css 사용하려면 styled-reset 깔아야함 

import { BrowserRouter as Router, Route } from "react-router-dom"; // 브라우저 히스토리를 사용해서 구현할 라우터가 BrowserRouter 이고 그걸 불러와서 Router이라고 부르겠다.

import PopularListContainer from './containers/PopularListContainer';
import NowPlayingListContainer from './containers/NowPlayingListContainer';
import UpCommingListContainer from './containers/UpCommingListContainer';
import TopRatedListContainer from './containers/TopRatedListContainer';

const App = () => {
    return (
        <Router>
            <div className="wrapper">
                <PopularListContainer />
                <NowPlayingListContainer />
                <UpCommingListContainer />
                <TopRatedListContainer />
                <GlobalStyled />
            </div>
        </Router>
    )
};

export default App;

