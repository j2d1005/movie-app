import React, {useState, UseEffect } from "react"
import Search from "../components/Search"

import { moviesApi } from "../api"





const SearchContainer = () => {
    const [ keyWord, setKeyWord ] = useState('');
    const [ results, setResults ] = useState('');

    const onChange = (e) => {
        setKeyWord(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault(); 
        searchList();
        
    };
    const searchList = async () => {
        const res = await moviesApi.search(keyword);
        setResult(res.data.results);
        setIsLoading(false);
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