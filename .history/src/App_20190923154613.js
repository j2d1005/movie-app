import React from 'react';
import GlobalStyled from "../assets/GlobalStyles";

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

