import React from "react";
import styled from "styled-components";

import Loading from './Loading'

const Content = styled.div`
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
                    Detail Page{movieId}
                    {console.log(movieData)}
                </Content>
            }
        </>
    )
    
}


export default Detail;