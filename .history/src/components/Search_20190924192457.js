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
            />
        </Form>
    )
}

export default Search;