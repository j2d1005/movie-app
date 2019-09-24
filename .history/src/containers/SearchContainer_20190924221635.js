import React, {useState, UseEffect } from "react"
import Search from "../components/Search"

import { moviesApi } from "../api"





const SearchContainer = ({ match }) => {
    const [ isLoading, setIsLoading ] = useState(false);
    // const [ isSearching, setSearching ] = useState(true);
    const [ keyWord, setKeyWord ] = useState('');
    const [ movie, setMovie ] = useState('');

    const onChange = (e) => {
        setKeyWord(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if( keyWord !== "" ){
            searchList();
        } else{
            alert('keyWord를 입력해주세요!');
        }
        
                
    };
    const searchList = async () => {
        // setIsLoading(true);
        const res = await moviesApi.search(keyWord);
        setMovie(res.data.results);
        setIsLoading(false);
        // setSearching(false);
        console.log(res.data.results);
    };
    return (
        <Search 
            keyWord={keyWord}
            onChange={onChange}
            onSubmit={onSubmit}
            // isSearching={isSearching}
            isLoading = {isLoading}
            movies = {movie}
            path = {match.path}
        />
    )
}

export default SearchContainer;