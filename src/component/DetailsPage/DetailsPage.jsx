import axios from 'axios';
import {React, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import requests from '../../request';
import "./DetailsPage.scss"

export default function Modal({close, movie}) {
     const [selected, setSelected] = useState([]);
     const [reviews, setReviews] = useState([]);
     const apiKey = '3961ba6c887fff01194d8a655016c76b'
    const apiUrl = 'https://api.themoviedb.org/3'
     let selectedID = movie;
     console.log(selectedID)
     let apiCall = `${apiUrl}/movie/${selectedID}?api_key=${apiKey}&language=en-US`;
     let apiCallReviews = `${apiUrl}/movie/${selectedID}/reviews?api_key=${apiKey}&language=en-US&page=1`;
     
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
    
     return ReactDOM.createPortal(
            
                  <>   
        <div className="modal__container" >
            <div className='modal__wrapper' >
            <img className="modal__image" src={`${baseImageURL}${selected.backdrop_path}`} alt='camera' />
              <div className='modal__content'>
            <div>
                <h1>{selected.title}</h1>
                <p>{selected.overview}</p>
            </div>
            {/* <div>
                {reviews.slice(0,5).map(review => (
                    <div className='reviews__card'>
                        <div className='reviews__author-info'>
                            <img className='reviews__avatar' src={`${baseImageURL}${review.author_details.avatar_path}`|| 'https://via.placeholder.com/10x10'}/>
                            <p className='reviews__author'>{review.author}</p>
                        </div>
                        <div>
                            <p className='reviews__content'>{review.content}</p>
                        </div>
                    </div>
                ))}
              </div> */}
              <div>
              <button className='modal__button'
                onClick={close}
                >Close modal
                </button>
            </div>
            </div>
            </div>
        </div>
        </>,
                document.getElementById('portal')  
  )
}
