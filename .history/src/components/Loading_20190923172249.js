import React from "react";
import styled from "styled-components";

const Loader = styled.div`
    p{
        position:absolute;
        top:0;bottom:0;right:0;left:0;
        margin:auto;
        font-size:60px;
    }
`;

const Loading = () => {
    return (
        <Loader>
            <p>로딩중...</p>
        </Loader>
    )
    
}


export default Loading;