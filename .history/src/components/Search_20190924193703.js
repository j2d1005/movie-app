import React from "react"
import styled from "styled-components";
import searchBtn from "../assets/images/search.png"

const Form = styled.form`
    position: absolute;
    width: 180px;
    top: 100px;
    left: 10px;

    input {
        width:100%;
        height:30px;
        padding-right:30px;
    }
    button {
        display:block;
        position:absolute;
        width:30px;
        height:30px;
        top:0;
        right:0;
        background:#1cb4bd;
        font-size:0;
        &:after {
            content:'';
            position:absolute;
            background:url(${searchBtn});
            width:14px;
            height:14px;
            top:8px;
            left:8px;    
            background-repeat: no-repeat;        
        }

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