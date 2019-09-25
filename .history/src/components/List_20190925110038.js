import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Loading from './Loading'
import Card from './Card';
import NomoVie from './NoMoive'

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


const List = ({ isLoading, movies, path, searched }) => {

    let [ desc, setDesc ] = useState(''); // 라우터에 따라 desc값을 다르게 주고 싶어서 사용
    let [ category, setCategory ] = useState(''); 
    useEffect(()=>{
        if( path === '/now_playing' ){ // 라우터별로 desc를 다르게 넘김 
            setCategory('Now Playing Movies');
        }else if( path === '/upcoming' ){
            setCategory('UpComing Movies');
        }else if( path === '/top_rated' ){
            setCategory('Top Rated Movies');
        }else if( path === '/popular' ){
            setCategory('Popular Movies');
        }else if( path === '/search' ){
            setCategory(`Search By ${searched}`);
        }
    }, []);
    
    return (
        <>
            {isLoading
                ? <Loading />
                : 
                <Container>
                    <h2 className="category">{category}</h2>
                    <ul className="list">
                        {/* {movies.length===0 &&

                        } */}
                        {movies.map( movie => {  

                            if( path === '/now_playing' || path === '/upcoming' ){ // 라우터별로 desc를 다르게 넘김 
                                desc = movie.release_date
                            }else if( path === '/top_rated' ){
                                desc = movie.vote_average 
                            }else if( path === '/popular' ){
                                desc = movie.popularity
                            }else if( path === '/search' ){
                                desc = null
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
            }
        </>
    )
}

export default List;