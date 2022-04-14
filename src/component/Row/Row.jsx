import axios from "axios";
import { Component, useEffect, useState } from "react";
import Modal from "../DetailsPage/DetailsPage";
import "../Row/Row.scss";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [clickedMovie, setClickedMovie] = useState("");
  const [largeMovie, setLargeMovie] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = (movieID) => {
    setShowModal(true);
    setClickedMovie(movieID);
    return;
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      setLargeMovie(request.data.results[0]);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <div className="row__title-container">
        <h2 className="row__title">{title}</h2>
        <p className="row__link"> View More</p>
      </div>
      <div className="row__posters">
        <div
          div
          className="row__poster-card-backdrop"
          onClick={() => {
            openModal(largeMovie.id);
          }}
        >
          <img
            className="row__poster-backdrop"
            src={`${baseUrl}${largeMovie.backdrop_path}`}
            alt={largeMovie.title}
          />
          <p className="row__poster-backdrop-title">{largeMovie.title}</p>
        </div>
        {movies.slice(1, 5).map((movie, first) => (
          <div
            className="row__poster-card"
            onClick={() => {
              openModal(movie.id);
            }}
            key={movie.id}
          >
            <img
              className="row__poster"
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="row__poster-title">{movie.title}</p>
          </div>
        ))}
      </div>
      {showModal ? (
        <Modal close={closeModal} movie={clickedMovie} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Row;
