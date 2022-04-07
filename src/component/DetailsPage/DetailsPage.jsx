import axios from 'axios';
import {React, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import requests from '../../request';
import "./DetailsPage.scss"
import { BsXLg } from 'react-icons/bs';
import BannerRow from '../BannerRow/BannerRow';

export default function Modal({close, movie}) {
     const [selected, setSelected] = useState([]);
     const [reviews, setReviews] = useState([]);
     const [credits, setCredits] =useState([]);
     const [similar, setSimilar] = useState([])

     const apiKey = '3961ba6c887fff01194d8a655016c76b'
     const apiUrl = 'https://api.themoviedb.org/3'
     
     let selectedID = movie;
     console.log(selectedID)
     let apiCall = `${apiUrl}/movie/${selectedID}?api_key=${apiKey}&language=en-US`;
     let apiCallReviews = `${apiUrl}/movie/${selectedID}/reviews?api_key=${apiKey}&language=en-US&page=1`;
     let apiCallCredits = `${apiUrl}/movie/${selectedID}/credits?api_key=${apiKey}&language=en-US&page=1`;
     let apiCallSimilar = `${apiUrl}/movie/${selectedID}/similar?api_key=${apiKey}&language=en-US&page=1`;
     
     let baseImageURL = 'https://image.tmdb.org/t/p/original/'
     useEffect(() => {
         async function fetchData() {
             const request = await axios.get(apiCall)
             setSelected(request.data)
             return request
         }
         fetchData()
     } );
   
     useEffect(() => {
         async function fetchData() {
             const reviews = await axios.get(apiCallReviews)
             setReviews(reviews.data.results)
             console.log(reviews)
             return reviews
         }
         fetchData()
     } )

      useEffect(() => {
         async function fetchData() {
             const credits = await axios.get(apiCallCredits)
             setCredits(credits.data.cast)
             console.log(credits)
             return credits
         }
         fetchData()
     } 
     )

     useEffect(() => {
         async function fetchData() {
             const similar = await axios.get(apiCallSimilar)
             setSimilar(similar.data.results)
             console.log(credits)
             return similar
         }
         fetchData()
     } 
     )

        function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
     
   
    
     return ReactDOM.createPortal(    
    <>   
        <div className="modal__container" >
            <div className='modal__wrapper' >
            <div className='modal__image-container'        >
                <img className="modal__image" src={`${baseImageURL}${selected.backdrop_path}`} alt={selected.name} />
            </div>
              <div className='modal__content'>
            <div className='modal__content-title'>
                <h1>{selected.title}</h1>
                <p>{selected.overview}</p>
            </div>
            <h3>Reviews</h3>
            <div className='reviews'>
                {reviews.slice(0,5).map(review => (
                    <div className='reviews__card'>
                        <div className='reviews__author-info'>
                            <img className='reviews__avatar' src={"https://via.placeholder.com/150x150"}/>
                            <p className='reviews__author'>{review.author}</p>
                        </div>
                        <div className='reviews__content-container'>
                            {review.content ? <p className='reviews__content'>{truncateString(review.content, 250)}</p> : <p>No Reviews</p>}
                            <p>{review.created_at}</p>
                        </div>
                    </div>
                ))}
              </div>
              <div>
              <BsXLg className='modal__button'
                onClick={close}
                />
            </div>
            <h3>Credits</h3>
            <div className='credits'>
                {credits.slice(0,25).map(credit  => (
                        <div className='credits__card'>                          
                            <img className='credits__card-avatar' src={`${baseImageURL}${credit.profile_path}`} alt={credit.original_name}/>
                            <p className='credits__card-name'>{credit.original_name}</p>
                            <p className='credits__card-character'>{credit.character}</p>
                        </div>
                ))} 
            </div>
            <h3 className='similar__title'>Similar Movies</h3>
            <BannerRow  className='similar__container' fetchURL={apiCallSimilar}/>
            </div>
            </div>
        </div>
    </>,
                document.getElementById('portal')  
  )
}
