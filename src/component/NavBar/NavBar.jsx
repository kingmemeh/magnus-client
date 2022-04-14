import React from 'react'
import { VscSearch } from "react-icons/vsc"
import {profileAvatar} from "../../assets/images/profile.jpg"
import "./NavBar.scss"


function NavBar() {
  return (
    <div className='navbar'>
        <div className='navbar__title-container'>
            <p className='navbar__title'>Magnus</p>
        </div>
        <div className='navbar__header-container'>
            <p className='navbar__header'>Home</p>
            <p className='navbar__header'>Movies</p>
            <p className='navbar__header'>TV Show</p>
            <p className='navbar__header'>Pricing</p>
        </div>
        <div className='navbar__user-container'>
            <VscSearch className='navbar__user-search' />
            <div className='navbar__profile-container'>
                <img className='navbar__profile-avatar' src={require('../../assets/images/profile.jpg')} alt={"user avatar"}/>
                <p className='navbar__profile-name'>Kingsley Memeh</p>
            </div>
        </div>
    </div>
  )
}

export default NavBar