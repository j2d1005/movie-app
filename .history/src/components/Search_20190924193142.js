import React from "react"
import styled from "styled-components";
import searchBtn from "../assets/images/search.png"

const Form = styled.form`
    position: absolute;
    width: 180px;
    top: 100px;
    left: 10px;

    input {
        height:30px;
    }
    button {
        display:block;
        position:absolute;
        width:30px;
        height:30px;
        font-size:0;

    }
`;


const Search = () => {
    return (
        <Form>
            <input 
                type="text" 
                name="keyword"
                value="keyword"
                placeholder="search.."
            />
            <button type="submit">
                {/* <img src={searchBtn} /> */}
                search
            </button>
        </Form>
    )
}

export default Search;