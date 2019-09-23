import React from "react";
import styled from "styled-components";

const Loader = styled.div`
    p{
        position:absolute;
        top:50%;
    　  left:50%;
    　  transform: translate(-50%,-50%);

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