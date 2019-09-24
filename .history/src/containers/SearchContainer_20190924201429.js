import React, {useState, UseEffect } from "react"
import searchBtn from "../assets/images/search.png"


const Search = () => {
    const { keyword, setKeyword } = useState('');

    const onChange = (e) => {
        setKeyword = (e.target.value);
    }

    return (
        <Form>
            <input 
                type="text" 
                name="keyword"
                value="keyword"
                placeholder="search.."
                onChange={onChange}
            />
            <button type="submit">
                {/* <img src={searchBtn} /> */}
                search
            </button>
        </Form>
    )
}

export default Search;