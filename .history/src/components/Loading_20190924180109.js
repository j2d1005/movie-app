import React from "react";
import styled from "styled-components";
import loadingImg from "../assets/images/loading.gif";

const Loader = styled.div`    
        position:absolute;
        top:50%;
    　  left:50%;
    　  transform: translate(-50%,-50%);
        img{
            width:100px;
        }
`;

const Loading = () => {
    return (
        <Loader><img src={loadingImg}/></Loader>
    )
    
}


export default Loading;