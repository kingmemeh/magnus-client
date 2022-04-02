import axios from "axios";
import {Component, useEffect, useState} from "react";
import "../Row/Row.scss"


function Row ({title, fetchURL}) {
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
                setMovies(request.data.items);
                return request;
                
        }
        fetchData();
        
            
        }

    , [fetchURL]);
        console.log(movies);
        return (
            <div className="row">
                <div >
                    <h2>{title}</h2>
                </div>
                <div className="row__posters">
                   {movies.slice(0,5).map(movie => (
                      <div className="row__poster-card"> 
                      <img className="row__poster" src={movie.image} alt={movie.title}/>
                      </div>
                   ))}
                    
                </div>
            </div>
        )
    }

    export default Row;