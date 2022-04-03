import React, { useEffect, useState } from "react";
//import requests from "../../request";
import axios from 'axios';
import VideoList from '../Sidebar/Sidebar'
import Sidebar from "../Sidebar/Sidebar";
import "./Banner.scss"
import requests from "../../request";
import BannerRow from "../BannerRow/BannerRow";

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Banner({fetchURL}) {
    const [movie, setMovie, currentVideo, setcurrentVideo] = useState([])

    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchURL);
        setMovie(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ]);
        // setcurrentVideo(movie.id)
        return request;
        }
        fetchData();
    }, [])
    return (
        <>    
      <header className="banner"
      style={{
          backgroundColor: "rgba(0,0,0,.7)" ,
          backgroundBlendMode:"overlay",
          backgroundImage:`url(${baseUrl}${movie?.backdrop_path})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
      }}>
          <div className="banner__container">
              <div className="banner__content">
                  <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                  </h1>
                  <p className="banner__description">{movie?.overview}</p>
                  <p className="banner__metadata">Type:{movie?.media_type}</p>
                  <p className="banner__metadata">Duration:{movie?.duration}</p>
                  <p className="banner__metadata">Rating:{movie?.vote_average}</p>
              </div>
              <div>
                  <button className="banner__button">PLAY</button>
              </div> 
          </div>
          
          <BannerRow title="Trending" fetchURL={requests.fetchTrending}/>
   
          {/* <Sidebar movie={movie} currentVideo={currentVideo}/> */}
      </header>
      </>
    )

}

export default Banner