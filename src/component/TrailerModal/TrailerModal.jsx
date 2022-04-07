import React from 'react'
import Modal from "react-responsive-modal";
import ReactPlayer from 'react-player'
import YouTube from 'react-youtube';
import '../DetailsPage/DetailsPage.scss'

export default function Player ({open, toggleModal, trailerUrl}) {
const opts ={
      height:"100%",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },

    }
    return (
    <Modal className='modal__container'
        open={open}
        onClose={toggleModal}
        // styles={{
        //   modal: {
        //     maxWidth: "unset",
        //     width: "100%",
        //     padding: "unset",
        //     position:'absolute'
        //   },
        //   overlay: {
        //     background: "rgba(0, 0, 0, 0.5)"
        //   },
        //   closeButton: {
        //     background: "yellow"
        //   }
        // }}
        // center
        >
         <YouTube className='modal__wrapper'
          videoId={trailerUrl}
          opts ={opts}
        />
      </Modal>
  )
}
