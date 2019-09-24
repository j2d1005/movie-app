import React, {useState, UseEffect } from "react"
import Search from "../components/Search"

import { Redirect } from "react-router-dom";



const SearchContainer = () => {
    const [ keyWord, setKeyWord ] = useState('');

    const onChange = (e) => {
        setKeyWord(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        return(
            <Redirect to="/search" />
        )
        
    };
    return (
        <Search 
            keyWord={keyWord}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default SearchContainer;