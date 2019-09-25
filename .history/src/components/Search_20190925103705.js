import React from "react"
import styled from "styled-components";
import searchBtn from "../assets/images/search.png";
import List from "../components/List";


const Container = styled.div`
    width:100%;
    max-width:1280px;
    margin:0 auto;    
    padding: 100px 0;    

    form{
        position:relative;
        display:block;
        max-width:768px;
        margin: 0 auto 50px;

        input {
            width:100%;
            height:50px;
            padding-left:10px;
            padding-right:30px;
        }
        button {
            display:block;
            position:absolute;
            width:50px;
            height:50px;
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
                top: 19px;
                left: 19px;   
                background-repeat: no-repeat;        
            }

        }
    }
    /* .list{
        display:block;
        :after{
            content:"";display:block;clear:both;
        } */
    /* } */
`;
const Search = ({ keyWord, onChange, onSubmit, isSearching, isLoading, movies, path  }) => {
    return (
        <Container>
            <form onSubmit={onSubmit}>
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
            </form>
            
            {!isSearching &&
                <List 
                    category = {'Search Results'}
                    isLoading = {isLoading}
                    movies = {movies}
                    path = {path}
                />
            }
            
        </Container>
    )
}

export default Search;