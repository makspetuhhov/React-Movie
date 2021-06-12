import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./MovieModal";
import MovieDetails from "./MovieDetails";
import { useMovieFetch } from "../hooks/custom/useMovieFetch";
import { StyledMovieCard } from "../styles/GlobalStyle";

const MovieCard = ({ image, movieId, clickable }) => {
  const [isModal, setModal] = useState(false);
  const [movie,  error] = useMovieFetch(movieId);
  if (error) return <div>Loading ...</div>;
  return (
    <StyledMovieCard>
      <>
        <Modal isVisible={isModal} onClose={() => setModal(false)}><MovieDetails movie={movie} /></Modal>
        {clickable ? (
          <><img className="clickable" src={image} alt="moviecard" onClick={() => setModal(true)}/></>
        ) : (<img src={image} alt="moviecard" />)}
      </>
    </StyledMovieCard>
  );
};
MovieCard.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};
export default MovieCard;
