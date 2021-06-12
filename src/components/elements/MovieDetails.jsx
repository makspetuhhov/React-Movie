import React from "react";
import PropTypes from "prop-types";
import MovieCard from "./MovieCard";
import NoImage from "../../assets/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../API";
import { StyledMovieDetails } from "../styles/GlobalStyle";

const MovieDetails = ({ movie }) => (
  <StyledMovieDetails backdrop={movie.backdrop_path}>
    <div className="moviedetails-content">
      <div className="moviedetails-thumb">
        <MovieCard
          image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : NoImage}
          clickable={false}
          alt="MovieCard"
        />
      </div>
      <div className="moviedetails-text">
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>
        <div className="rating">
          <div>
            <h3>RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  </StyledMovieDetails>
);

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;
