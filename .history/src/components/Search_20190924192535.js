import React from "react"
import styled from "styled-components";

const Form = styled.form`

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
        </Form>
    )
}

export default Search;