import React, {useState, UseEffect } from "react"
import Search from "../components/Search"



const SearchContainer = () => {
    const { keyword, setKeyword } = useState('');

    const onChange = (e) => {
        setKeyword = (e.target.value);
    }

    return (
        <Search 
            keyWord={keyword}
            onChange={onChange}
        />
    )
}

export default SearchContainer;