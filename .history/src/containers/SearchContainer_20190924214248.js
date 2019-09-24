import React, {useState, UseEffect } from "react"
import Search from "../components/Search"

import { moviesApi } from "../api"





const SearchContainer = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ keyWord, setKeyWord ] = useState('');
    const [ result, setResult ] = useState('');

    const onChange = (e) => {
        setKeyWord(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if( keyWord !== "" ){
            searchList();
            console.log(res);
        } else{
            alert('keyWord를 입력해주세요!');
        }
        
                
    };
    const searchList = async () => {
        const res = await moviesApi.search(keyWord);
        setResult(res.data.result);
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