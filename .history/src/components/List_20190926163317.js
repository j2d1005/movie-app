import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import Loading from './Loading'
import Card from './Card';
import NoMoive from './NoMoive'

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


const List = ({ isLoading, movies, urlpath, category }) => {

    let [ desc, setDesc ] = useState(''); // 라우터에 따라 desc값을 다르게 주고 싶어서 사용 // render 안에서는 Set 못쓰는듯..
    // ul 안에서 map을 돌려서 li를 생성하고 있기 때문에 desc값은 map안에서 수정한다.
    return (
        <>
            {isLoading
                ? <Loading />
                : 
                <Container>
                    <h2 className="category">{category}</h2>
                    {movies.length===0 &&
                            <NoMoive 
                                urlpath={urlpath}
                            />
                        }
                    <ul className="list">
                        {movies.map( movie => {  
                            if( urlpath === '/now_playing' || urlpath === '/upcoming' ){ // 라우터별로 desc를 다르게 넘김 
                                desc = movie.release_date
                            }else if( urlpath === '/top_rated' ){
                                desc = movie.vote_average 
                            }else if( urlpath === '/popular' ){
                                desc = movie.popularity
                            }else if( urlpath === '/search' ){
                                desc = null
                            }

                            return (
                                <Card 
                                key = {movie.id}
                                id = {movie.id}
                                title = {movie.title}
                                desc = {desc}
                                poster = {movie.poster_path}
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