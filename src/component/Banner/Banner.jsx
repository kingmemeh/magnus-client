import React, { useEffect, useState } from "react";
//import requests from "../../request";
import axios from 'axios';
import "./Banner.scss"
import requests from "../../request";
import BannerRow from "../BannerRow/BannerRow";
import {BsPlayCircle} from 'react-icons/bs';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Banner({fetchURL}) {
    const [movie, setMovie, currentVideo, setcurrentVideo] = useState([])

    //We will refactor state of component to use currentVideo to set state onClick of a BannerRow element
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchURL);
        setMovie(
            request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ]);
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
              </div>
              <div>
                  <BsPlayCircle className="banner__button"/>
              </div> 
          </div>
          
          <BannerRow title="Trending" fetchURL={requests.fetchTrending}/>
   
         
      </header>
      </>
    )

}

export default Banner