import axios from "axios";
import {Component, useEffect, useState} from "react";
import Modal from "../DetailsPage/DetailsPage";
import "../Row/Row.scss"


const baseUrl ='https://image.tmdb.org/t/p/original/'

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
   const [clickedMovie, setClickedMovie] = useState("");
   const [largeMovie, setLargeMovie] =useState([])
    const [showModal, setShowModal] = useState(false);

  const openModal = (movieID) => {
    setShowModal(true)
    setClickedMovie(movieID)
    //console.log(movieID);
    return
  };

  const closeModal = () => {
      setShowModal(false)
  }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL)
                setMovies(request.data.results);
                setLargeMovie(request.data.results[0])
                //console.log(request)
                return request;
                
                
        }
        fetchData();
        
            
        }

    , [fetchURL]);
        //console.log(movies);
        return (
            <div className="row">
                <div className="row__title-container" >
                    <h2 className="row__title">{title}</h2>
                    <p className="row__link"> View More</p>
                </div>
                <div className="row__posters" >
                <div div className="row__poster-card-backdrop" ><img className="row__poster-backdrop" src={`${baseUrl}${largeMovie.backdrop_path}`} alt={largeMovie.title}  /></div>
                   {movies.slice(1,5).map((movie, first) => (
                      <div className="row__poster-card"
                      onClick={() => {openModal(movie.id)}}
                      key={movie.id}> 
                      
                      <img className="row__poster" 
                      src={`${baseUrl}${movie.poster_path}`} alt={movie.title}/>
                      </div>
                      
                   ))}
                </div>
                 {showModal ? <Modal close={closeModal} movie={clickedMovie} /> : <div></div>}
            </div>
        )
    }

    export default Row;