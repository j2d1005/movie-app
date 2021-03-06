import React, {useState, UseEffect } from "react"
import Search from "../components/Search"



const SearchContainer = () => {
    const [ keyWord, setKeyWord ] = useState('');

    const onChange = (e) => {
        setKeyWord = (e.target.value);
    }
    return (
        <Search 
            keyWord={keyWord}
            onChange={onChange}
        />
    )
}

export default SearchContainer;