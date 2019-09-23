import React from "react";
import styled from "styled-components";

import Loading from './Loading'



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
                <div>
                    Detail Page{movieId}
                    {console.log(movieData.title)}
                </div>
            }
        </>
    )
    
}


export default Detail;