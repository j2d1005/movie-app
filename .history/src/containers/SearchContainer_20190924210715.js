import React, {useState, UseEffect } from "react"
import Search from "../components/Search"




const SearchContainer = ({ history }) => {
    const [ keyWord, setKeyWord ] = useState('');

    const onChange = (e) => {
        setKeyWord(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault(); 
        history.push("/search");
        
        
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