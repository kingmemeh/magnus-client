import axios from 'axios';
import React, { useState,useEffect } from 'react';
import './TVHomeDetails.scss';
import EpisodesCard from '../EpisodesCard/EpisodesCard';
import {BsPlayCircle} from 'react-icons/bs';

export default function TVHomeDetails({title,fetchURL}) {
    const[tv, setTv] = useState([])
    const [selectedTV, setSelectedTV] = useState("")
    const baseUrl = 'https://image.tmdb.org/t/p/original/';

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
            setTv(request.data.results [
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            // setSelectedTV(tv.id)
            // console.log(selectedTV)
            return request;
        }
        fetchData();
    }, [])

  function truncateString(str, num) {
  if (str && str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

  return (
    <div className='home-tv__container'>
        <div className='home-tv__title-container'>
            <h2 className='home-tv__title'>{title}</h2>
        </div>
        <div className='home-tv__video-container'
        style={{
            backgroundImage:`url(${baseUrl}${tv?.backdrop_path})`,
            backgroundPosition:'center center',
            backgroundSize: 'cover',
            backgroundColor: "rgba(0,0,0,.7)" ,
            backgroundBlendMode:"overlay",

        }}>
            <BsPlayCircle className='home-tv__video-play--button'
            style={{color: 'yellow', fontSize:'10rem', position:'absolute', top:'50%', left:'50%'}}/>
            <div className='home-tv__video-metadata-container'>
                <h2 className='home-tv__video-title'>{tv?.name || tv?.title}</h2>
                <p className='home-tv__video-description'>{truncateString(tv?.overview , 100)}</p>
                <div className='home-tv__video-button-container'>
                    <button className='home-tv__video-button--1'>Play</button>
                    <button className='home-tv__video-button--2'>Details</button>
                </div>
            </div>
            {/* <img className='home-tv__video'
            src={`${baseUrl}${tv?.backdrop_path}`} alt={tv.name}/> */}
        </div>
        
        <EpisodesCard id={tv.id} />
        
        <div className='home-tv__splitter'>
        </div>
    </div>
  )
}
