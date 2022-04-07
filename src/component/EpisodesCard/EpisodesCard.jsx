import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { VscCalendar } from 'react-icons/vsc';
import {BsCalendar} from 'react-icons/bs'
import './EpisodesCard.scss'

export default function EpisodesCard({id}) {
    const [episodes, setEpisodes] =useState([]);
    const apiKey = '3961ba6c887fff01194d8a655016c76b';
    const apiUrl = 'https://api.themoviedb.org/3';
    const showID = id;
    const baseUrl ='https://image.tmdb.org/t/p/original/';
    
    const fetchEpisodes= `${apiUrl}/tv/${showID}/season/1?api_key=${apiKey}&language=en-US`

    useEffect (() => {
        async function fetchData() {
            const request =await axios.get(fetchEpisodes)
            setEpisodes(request.data.episodes)
            return request
        }
        fetchData()
    })

    function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
    return (
    <div className='episodes'>
        <div className='episodes__card-container'>
            {episodes.slice(0,3).map((episode) => (
                <div className='episode__card'
                key={episode.id} >
                    <img className='episode__card-still' src={`${baseUrl}${episode.still_path}`} alt={`Episode${episode.episode_number}`}/>
                    <div className='episode__card-metadata'>
                        <h4 className='episode__card-number'>Episode {episode.episode_number}</h4>
                        <h3 className='episode__card-name'>{episode.name}</h3>
                        <p className='episode__card-overview'>{truncateString(episode.overview, 80)}</p>
                        <p className='episode__card-calendar'><BsCalendar/>{episode.air_date}</p>
                    </div>
                    
                </div>
            ))}

        </div>

    </div>
  )
}
