import {React, useState, useEffect} from 'react';
import Banner from '../../component/Banner/Banner';
import Search from '../../component/Search/Search';
import requests from '../../request';
import './ExploreMovies.scss';

export default function ExploreMovies() {
    const apiKey = '3961ba6c887fff01194d8a655016c76b';
    const apiUrl = 'https://api.themoviedb.org/3';
    const searched ='';
    const [exploreMovies, setExploreMovies] = useState([]);
    
    const searchMovies= `${apiUrl}/search/movie?${apiKey}language=en-US&query=${searched}&page=1&include_adult=false`
  return (
    <>

    <Banner fetchURL={requests.fetchTrendingMovies}/>
    <Search apiQuery={searchMovies}/>
    </>
  )
}
