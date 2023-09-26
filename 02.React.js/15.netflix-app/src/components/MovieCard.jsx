import React from "react";

const MovieCard = ({ movies }) => {
  // console.log(movies);

  const div_img = {
    backgroundImage: `url(https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/${movies?.poster_path})`,
    height: "200px",
    width: "355px",
  };
  return <div style={div_img}></div>;
};

export default MovieCard;
