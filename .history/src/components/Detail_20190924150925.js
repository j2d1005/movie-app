import React from "react";
import styled from "styled-components";

import Loading from './Loading'

const Content = styled.div`
    padding: 50px;
    text-align:center;
    color:#fff;
    
    img {
        width:50%;
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
                    <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} title={movieData.title} />
                    Detail Page{movieId}
                    {console.log(movieData)}
                </Content>
            }
        </>
    )
    
}


export default Detail;