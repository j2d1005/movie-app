import React from "react";
import styled from "styled-components";

import Loading from './Loading'

const Content = styled.div`
    padding: 50px;
    text-align:center;
    color:#fff;
    display:block;
    :after{
        content:"";display:block;clear:both;
    }

    .poster_wrap {
        float:left;
        width:35%;
        img {
            width:100%;
        }
    }
    .movie_desc {
        float:left;
        width:65%;
        padding:0 30px;
        text-align:left;

        h2 {
            font-size:2.5rem;
        }

     }
`;

const Detail = ({ isLoading, movieData, movieId }) => {
    return (
        // <div>
        //     Detail Page{movieId}
        //     {console.log(movieData)}
        // </div>
        <>
            {isLoading
                ?<Loading />
                :
                <Content>
                    <div className="poster_wrap">
                        <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} title={movieData.title} />
                    </div>
                    <div className="movie_desc">
                        <h2 className="title">{movieData.title}</h2>
                    </div>
                    
                    {console.log(movieData)}
                </Content>
            }
        </>
    )
    
}


export default Detail;