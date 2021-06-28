import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>Movie: {movie.title}</h3>
          <ul>
            <li>Time: {movie.time}</li>
            <li>Genre: {movie.genres}</li>
            <ul>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </ul>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
