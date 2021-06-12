import React, { useState } from "react";
import {POPULAR_BASE_URL, SEARCH_BASE_URL, POSTER_SIZE, IMAGE_BASE_URL,} from "../API";
import SearchBar from "./elements/SearchBar";
import MovieWall from "./elements/MovieWall";
import MovieCard from "./elements/MovieCard";
import { useHomeFetch } from "./hooks/custom/useHomeFetch";
import NoImage from "../assets/no_image.jpg";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [
    {state: { movies,  }, error,  },
    fetchMovies,
  ] = useHomeFetch(searchTerm);
  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;
    setSearchTerm(search);
    fetchMovies(endpoint);
  };
  if (error) return <div>Loading...</div>;
  return (
    <>
      <SearchBar callback={searchMovies} />
      <MovieWall header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map((movie) => (
          <>
            <MovieCard
              key={movie.id}
              clickable
              image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path: NoImage}
              movieId={movie.id}
              movieName={movie.original_title}
            />
          </>
        ))}
      </MovieWall>
    </>
  );
};
export default Home;
