import React from "react"
import styled from "styled-components";
import searchBtn from "../assets/images/search.png"

const Container = styled.div`
    width:100%;
    margin:0 auto;    
    padding: 100px 0;    

    form{
        position:relative;
        display:block;
        max-width:768px;
        margin: 0 auto;

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
`;
const Search = ({ keyWord, onChange, onSubmit, path, isLoading, movies  }) => {
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

            <ul className="list">
                {movies.map( movie => {  

                    if(path === '/' || path === '/UpComing'){ // 라우터별로 desc를 다르게 넘김 
                        desc = movie.release_date
                    }else if(path === '/TopRated'){
                        desc = movie.vote_average 
                    }else if(path === '/Popular'){
                        desc = movie.popularity
                    }        

                    return (
                        <Card 
                        key = {movie.id}
                        id = {movie.id}
                        title = {movie.title}
                        desc = {desc}
                        poster = {movie.poster_path}
                        // date = {movie.release_date} // now_playing일때만 주고싶음
                        />
                    )
                })}
            </ul> 
        </Container>
    )
}

export default Search;