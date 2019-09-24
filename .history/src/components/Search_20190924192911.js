import React from "react"
import styled from "styled-components";

const Form = styled.form`
    position: absolute;
    width: 180px;
    top: 100px;
    left: 10px;

    input {
        
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
                search
            </button>
        </Form>
    )
}

export default Search;