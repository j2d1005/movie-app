import React from "react"
import styled from "styled-components";
import searchBtn from "../assets/images/search.png"

const Container = styled.div`
    width:100%;
    max-width:1280px;
    margin:0 auto;
    padding:0 30px;
    .category {
        color:#eee;
        padding:30px 0;
        font-size:30px;
        // text-align:center;
    }
    .list{
        display:block;
        :after{
            content:"";display:block;clear:both;
        }
    }
`;
const Form = styled.form`
    position:relative;
    display:block;
    max-width:500px;
    margin:0 auto;
    padding: 100px 50px;

    input {
        width:100%;
        height:30px;
        padding-left:10px;
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


const Search = ({ keyWord, onChange, onSubmit }) => {
    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="keyword"
                    value={keyWord}
                    onChange={onChange}
                    placeholder="search.."
                />
                {console.log(keyWord)}
                <button type="submit">
                    search
                </button>
            </Form>
        </Container>
    )
}

export default Search;