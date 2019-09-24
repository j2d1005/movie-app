import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Item = styled.li`
    display: inline-block;
    vertical-align: top;
    width:20%;
    padding:0 10px;
    margin-bottom:20px;
      img {
          width:100%;
          border-radius:20px;
      }
      .movie__data {         

          .movie__title {
              font-size:1.1rem;
              color:#eee;
              font-weight:400;
          }
          .movie__desc {
            color:#ddd;
              margin-top:5px;
          }
      }
      a {
          color:inherit;
          text-decoration:none;
      }
      @media(max-width:1024px){
          width:25%;
      }
      @media(max-width:960px){
          width:33.333%;
      }
      @media(max-width:768px){
          width:50%;
      }
      @media(max-width:480px){
          width:100%;
      }
`;

const Card = ({ id, title, desc, poster }) => {
    return (
        <Item>
            <Link to={`/Detail/${id}`}>
                <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">
                        {title}
                    </h3>
                    <p className="movie__desc">
                        {desc}
                    </p>
                </div>
            </Link>
        </Item>
    )
    
}


export default Card;