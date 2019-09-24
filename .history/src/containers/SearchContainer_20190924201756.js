import React, {useState, UseEffect } from "react"
import Search from "../components/Search"
import searchBtn from "../assets/images/search.png"


const Search = () => {
    const { keyword, setKeyword } = useState('');

    const onChange = (e) => {
        setKeyword = (e.target.value);
    }

    return (
        <Search 
            keyword={keyword}
            onChange={onChange}
        />
    )
}

export default Search;