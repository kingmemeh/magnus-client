import axios from 'axios';
import {React, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import requests from '../../request';
import "./DetailsPage.scss"

export default function Modal({close, movie}) {
     const [selected, setSelected] = useState([]);
     const apiKey = '3961ba6c887fff01194d8a655016c76b'
    const apiUrl = 'https://api.themoviedb.org/3'
     let selectedID = movie;
     console.log(selectedID)
     let apiCall = `${apiUrl}/movie/${selectedID}?api_key=${apiKey}&language=en-US`;
     
     let baseImageURL = 'https://image.tmdb.org/t/p/original/'
     useEffect(() => {
         async function fetchData() {
             const request = await axios.get(apiCall)
             setSelected(request.data)
             return request
         }
         fetchData()
     } )
   

    
     return ReactDOM.createPortal(
            <>         
        <div className="modal__container" >
            <div className='modal__wrapper' >
            <img className="modal__image" src={`${baseImageURL}${selected.backdrop_path}`} alt='camera' />
              <div className='modal__content'>
            <h1>{selected.title}</h1>
            <p>{selected.overview}</p>
                <button>Join Now</button>
              </div>
              <button className='modal__button'
                onClick={close}
                >Close modal
                </button>
            </div>
        </div>
                </>,
                document.getElementById('portal')  
  )
}
