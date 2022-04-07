import {React, useRef} from 'react'


export default function Search(apiQuery) {
    
  return (
    <div>
        <div className='search'>
            <input type='text'placeholder='Search Movies' className='prompt'/>
        </div>
    </div>
  )
}
