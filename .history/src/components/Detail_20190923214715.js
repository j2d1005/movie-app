import React from "react";
import styled from "styled-components";


const Detail = ({ isLoading, movieData, movieId }) => {
    return (
        <div>
            Detail Page{movieId}

            {console.log(movieData)}
        </div>
    )
    
}


export default Detail;