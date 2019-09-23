import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Loader = styled.div`
    position:absolute;
    top:0;bottom:0;right:0;left:0;
    margin:auto;
    font-size:60px;
`;

const Loading = () => {
    return (
        <Loader>
            <span>로딩중...</span>
        </Loader>
    )
    
}


export default Loading;