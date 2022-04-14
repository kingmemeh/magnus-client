import axios from "axios";
import React, { useState, useEffect } from "react";
import "./TVHomeDetails.scss";
import EpisodesCard from "../EpisodesCard/EpisodesCard";
import { BsPlayCircle } from "react-icons/bs";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import Player from "../TrailerModal/TrailerModal";

export default function TVHomeDetails({ title, fetchURL }) {
  const [tv, setTv] = useState([]);
  const [selectedTV, setSelectedTV] = useState("");
  const [trailerUrl, setTrailerUrl] = useState("");
  const [open, setOpen] = useState(false);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const onOpenModal = () => {
    setOpen(!open);
    handleClick();
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setTv(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      // setSelectedTV(tv.id)
      // console.log(selectedTV)
      return request;
    }
    fetchData();
  }, []);

  const handleClick = (tv) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(tv.title || tv?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
    console.log(trailerUrl);
  };

  function truncateString(str, num) {
    if (str && str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <div className="home-tv__container">
      <div className="home-tv__title-container">
        <h2 className="home-tv__title">{title}</h2>
      </div>
      <div
        className="home-tv__video-container"
        style={{
          backgroundImage: `url(${baseUrl}${tv?.backdrop_path})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0,.7)",
          backgroundBlendMode: "overlay",
        }}
      >
        <Player open={open} toggleModal={onOpenModal} trailerUrl={trailerUrl} />
        <BsPlayCircle
          className="home-tv__video-play--button"
          style={{
            color: "yellow",
            fontSize: "10rem",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
        />
        <div className="home-tv__video-metadata-container">
          <h2 className="home-tv__video-title">{tv?.name || tv?.title}</h2>
          <p className="home-tv__video-description">
            {truncateString(tv?.overview, 100)}
          </p>
          <div className="home-tv__video-button-container">
            <button className="home-tv__video-button--1">Play</button>
            <button
              onClick={() => onOpenModal()}
              className="home-tv__video-button--2"
            >
              Watch Trailer
            </button>
          </div>
        </div>


        {/* To make trailer of film play, currently buggy
        {trailerUrl && <Youtube className='home-tv__video-trailer' videoId={trailerUrl} opts={opts}/>} */}
        {/* <img className='home-tv__video'
            src={`${baseUrl}${tv?.backdrop_path}`} alt={tv.name}/> */}
      </div>

      <EpisodesCard id={tv.id} />

      <div className="home-tv__splitter"></div>
    </div>
  );
}
