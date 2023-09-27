import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const MovieSlide = ({
  movies,
  upcomingMovies,
  topRatedMovies,
  genresMovies,
}) => {
  // console.log("movieSlise.jsx :", movies);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1151 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 1150, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1023, min: 670 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 669, min: 467 },
      items: 3,
    },
  };
  return (
    <div className="Carousel">
      <Carousel responsive={responsive}>
        <h3 className="movie-list">Popular Movie</h3>
      </Carousel>
      <Carousel responsive={responsive}>
        {movies.map((item) => (
          <MovieCard movies={item} genresMovies={genresMovies}></MovieCard>
        ))}
      </Carousel>{" "}
      <Carousel responsive={responsive}>
        <h3 className="movie-list">Top rated Movie</h3>
      </Carousel>
      {/* upcomingMovies */}
      <Carousel responsive={responsive}>
        {upcomingMovies.map((item) => (
          <MovieCard movies={item} genresMovies={genresMovies}></MovieCard>
        ))}
      </Carousel>{" "}
      <Carousel responsive={responsive}>
        <h3 className="movie-list">Upcoming Movie</h3>
      </Carousel>
      {/* topRatedMovies */}
      <Carousel responsive={responsive} className="react-multi-carousel-item">
        {topRatedMovies.map((item) => (
          <MovieCard
            movies={item}
            className="carousel-item"
            genresMovies={genresMovies}
          ></MovieCard>
        ))}
      </Carousel>{" "}
    </div>
  );
};

export default MovieSlide;
