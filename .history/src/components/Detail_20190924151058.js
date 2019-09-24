import React from "react";
import styled from "styled-components";

import Loading from './Loading'

const Content = styled.div`
    padding: 50px;
    text-align:center;
    color:#fff;
    
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
                    <div class="poster_wrap">
                        <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} title={movieData.title} />
                    </div>
                    
                    Detail Page{movieId}
                    {console.log(movieData)}
                </Content>
            }
        </>
    )
    
}


export default Detail;