import React, {useState, UseEffect } from "react"
import Search from "../components/Search"




const SearchContainer = () => {
    const [ keyWord, setKeyWord ] = useState('');

    const onChange = (e) => {
        setKeyWord(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault(); 
        
        
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