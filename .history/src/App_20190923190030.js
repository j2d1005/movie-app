import React from 'react';
import GlobalStyled from "./assets/GlobalStyles";  // reset.css 사용하려면 styled-reset 깔아야함 


import PopularListContainer from './containers/PopularListContainer';
import NowPlayingListContainer from './containers/NowPlayingListContainer';
import UpCommingListContainer from './containers/UpCommingListContainer';
import TopRatedListContainer from './containers/TopRatedListContainer';

const App = () => {
    return (
        <div className="wrapper">
            <PopularListContainer />
            <NowPlayingListContainer />
            <UpCommingListContainer />
            <TopRatedListContainer />
            <GlobalStyled />
        </div>
    )
};

export default App;

