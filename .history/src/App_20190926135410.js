import React from 'react';
import GlobalStyled from "./assets/GlobalStyles";  // reset.css 사용하려면 styled-reset 깔아야함 
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"; // 브라우저 히스토리를 사용해서 구현할 라우터가 BrowserRouter 이고 그걸 불러와서 Router이라고 부르겠다.
import HeaderContainer from './containers/HeaderContainer'
import SearchContainer from './containers/SearchContainer';
import DetailContainer from './containers/DetailContainer';
import ListContainer from './containers/ListContainer';
import reset from "styled-reset";
const App = () => {
    
    console.log(reset)
    return (
        <Router>            
            <HeaderContainer />
            <div className="wrapper">
                <Switch>  {/* react-router-dom에서 제공하는 컴포넌트 */}
                    {<Redirect exact from="/" to="/now_playing" />} 
                    {/*/로 들어오면 now_playng로이동하도록*/} 
                    <Route path="/now_playing" component={ListContainer} /> {/*path랑 api콜하는 주소랑 맞춰서 같이 씀/ 라우터이름을 불러와서 api 콜할것임*/}
                    <Route path="/popular" component={ListContainer} />   
                    <Route path="/upcoming" component={ListContainer} />
                    <Route path="/top_rated" component={ListContainer} />
                    <Route path="/search" component={SearchContainer} />
                    <Route exact path="/Detail/:id" component={DetailContainer} />
                    {/* <Route path="/url/:username" component={Url} /> */}
                </Switch>
                <GlobalStyled />   {/* 루트js파일에 넣어주면 전역적으로 스타일이 들어간다. */}
            </div>
        </Router>
    )
};

export default App;

