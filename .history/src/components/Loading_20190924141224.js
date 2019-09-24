import React from "react";
import styled from "styled-components";

const Loader = styled.div`    
        position:absolute;
        top:50%;
    　  left:50%;
    　  transform: translate(-50%,-50%);
        font-size:60px;    
        color:#fff;
`;

const Loading = () => {
    return (
        <Loader>로딩중...</Loader>
    )
    
}


export default Loading;