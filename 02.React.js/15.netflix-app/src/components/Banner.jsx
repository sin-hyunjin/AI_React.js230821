import React from "react";

const Banner = ({ movie }) => {
  // console.log(movie);
  const div_style = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie?.poster_path})`,
  };

  return (
    <div style={div_style} className="banner">
      <div className="movie-container">
        <div className="movie-title">{movie.title}</div>
        <div className="movle-overview">{movie.overview}</div>
      </div>
    </div>
  );
};

export default Banner;
