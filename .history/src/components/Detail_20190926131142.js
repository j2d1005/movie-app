import React from "react";
import styled from "styled-components";

import Loading from './Loading'
import star from '../assets/images/star.png'

const Content = styled.div`
    max-width:1024px;
    margin:0 auto;
    padding: 100px 50px;
    text-align:center;
    color:#fff;
    display:block;
    :after{
        content:"";display:block;clear:both;
    }
    @media(max-width:960px){
        padding:50px;
    }

    .poster_wrap {
        float:left;
        img {
            box-shadow: 3px 3px 10px #000;
        }
        @media(max-width:960px){
            text-align: center;
            width:100%;
        }
    }
    .movie_desc {
        float:left;
        width:calc( 100% - 300px );
        padding:30px 40px 0;
        text-align:left;
        @media(max-width:960px){
            width:100%;
            text-align: center;
        }

        .title {
            font-size:2.5rem;
        }

        p {
            padding:10px 0;
        }
        .rate {
            img {
                display:inline-block;
                width:22px;
                vertical-align:top;
                margin-right:10px;
            }
        }
        .genres {
            padding:10px 0;
            li{
                display:inline-block;
                span{
                    margin:0 10px;
                }
            }
        }
        .overview {
            padding:10px 0;
        }

     }
`;

const Detail = ({ isLoading, movieData }) => {
    // const video = movieData.videos.results;
    {console.log(movieData.videos.results)}
    return (
    //     <div className="video_box clearfix">
    //     {result.videos.results.length > 0 
    //     ? <>
    //         <h3>Videos</h3>
    //         {
    //           result.videos.results.map((video, index) => index < 4
    //           ?
    //           <div className="video" key={index}>
    //             <Dotdotdot clamp={3}>
    //                 <p>{video.name}</p>
    //             </Dotdotdot>
    //             <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.name}>
    //             </iframe>
    //           </div>
    //           : ""
    //         )
    //         }
    //       </>
    //     : ""
    //     }
    //   </div>
        // <div>
        //     Detail Page{movieId}
        //     {console.log(movieData)}
        // </div>
        <>
        {console.log(movieData)}
            {isLoading
                ?<Loading />
                :
                <Content>
                    <div className="poster_wrap">
                        <img src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`} alt={movieData.title} title={movieData.title} />
                    </div>
                    <div className="movie_desc">
                        <h2 className="title">{movieData.title}</h2>
                        <p className="date">{movieData.release_date}</p>
                        <p className="rate">
                            <img src={star} />
                            <span>{movieData.vote_average}</span>
                        </p>
                        <ul className="genres">
                            {movieData.genres.map( (genre, index) =>  //genre는 각item(하위에 id와 name들어있음)  map의 두번째 인자는 각 item의 인덱스(넘버)
                                index === movieData.genres.length-1 
                                ? <li key={index}>{genre.name}</li>   
                                : <li key={index}>{genre.name}<span>/</span></li>  
                                                              
                            )}                
                        </ul>
                        <div className="overview">
                            <strong>Overview</strong>
                            <p>{movieData.overview}</p>
                        </div>
                    </div>
                    
                    {console.log(movieData)}
                </Content>
            }
        </>
    )
    
}


export default Detail;