import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

const Loader = styled.li`
    float:left;
    width:20%;
    padding:0 10px;
      img {
          width:100%;
      }
      .movie__data {
          min-height:100px;

          .movie__popularity {
              margin-top:5px;
          }
      }
`;

const Loading = () => {
    return (
        <Loader>
            <span>로딩중...</span>
        </Loader>
    )
    
}


export default Loading;