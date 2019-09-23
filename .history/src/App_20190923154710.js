import React from 'react';
import GlobalStyled from "./assets/GlobalStyles";  // reset.css 사용하려면 styled-reset 깔아야함

import List from "./components/List"

const App = () => {
    return (
        <div className="wrapper">
            <List />
            <GlobalStyled />
        </div>
    )
};

export default App;

