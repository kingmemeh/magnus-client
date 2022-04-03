import axios from "axios";
import {Component, useEffect, useState} from "react";
import "../BannerRow/BannerRow.scss"

const baseUrl ='https://image.tmdb.org/t/p/original/'

function BannerRow ({title, fetchURL}) {
    // state = {
    //     movies:[]
    // }

    // componentDidMount(props) {
    // const request = axios.get(this.props.fetchURL)
    // .then(res => {
    //     this.setState({movies:res.data})
    // })
    // .catch(err => alert('Connection Error'))
    
    // console.log(request)
    // }

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
                setMovies(request.data.results);
                return request;
                
        }
        fetchData();
        
            
        }

    , [fetchURL]);
        //console.log(movies);
        return (
            <div className="banner-row">
                <div className="banner-row-title--container" >
                    <h2 className="banner-row-title">{title}</h2>
                </div>
                <div className="banner-row__posters">
                   {movies.slice(0,10).map(movie => (
                      <div className="banner-row__poster-card"
                      key={movie.id}> 
                      <img className="banner-row__poster" src={`${baseUrl}${movie.backdrop_path}`} alt={movie.title}/>
                      <p className="banner-row__poster-title">{movie?.title || movie?.name || movie?.original_name}</p>
                      </div>
                   ))}
                    
                </div>
            </div>
        )
    }

    export default BannerRow;