import React from "react";
import styled from "styled-components";

import Loading from './Loading'
import star from '../assets/images/star.png'

const Content = styled.div`
    padding: 50px;
    text-align:center;
    color:#fff;
    display:block;
    :after{
        content:"";display:block;clear:both;
    }

    .poster_wrap {
        float:left;
        width:35%;
        img {
            width:100%;
        }
    }
    .movie_desc {
        float:left;
        width:65%;
        padding:0 30px;
        text-align:left;

        h2 {
            font-size:2.5rem;
        }

        table {
            

        }

     }
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
                    <div className="poster_wrap">
                        <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={movieData.title} title={movieData.title} />
                    </div>
                    <div className="movie_desc">
                        <h2 className="title">{movieData.title}</h2>
                        <p className="date">{movieData.release_date}</p>
                        <p className="rate">
                            <img src={star} />
                            <span>{movieData.vote_average}</span>
                        </p>
                        <ul className="genres">
                            {movieData.genres.map( (genre, index) => { //genre는 각item(하위에 id와 name들어있음)  map의 두번째 인자는 각 item의 인덱스(넘버)
                                return(
                                    <li key={index}>{genre.name}</li>
                                )
                            })}                
                        </ul>
                        <div className="overview">
                            {/* <strong>Overview</strong> */}
                            <p>{movieData.overview}</p>
                        </div>
                    </div>
                    
                    {console.log(movieData)}
                </Content>
            }
        </div>
    )
    
}


export default Detail;