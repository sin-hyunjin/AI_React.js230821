import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./MovieCard";

const MovieSlide = ({ movies }) => {
  console.log("movieSlise.jsx :", movies);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Carousel">
      <Carousel responsive={responsive}>
        <h3>Popular Movie</h3>
      </Carousel>
      <Carousel responsive={responsive}>
        {movies.map((item) => (
          <MovieCard movies={item}></MovieCard>
        ))}
      </Carousel>{" "}
      <Carousel responsive={responsive}>
        <h3>Top rated Movie</h3>
      </Carousel>
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>{" "}
      <Carousel responsive={responsive}>
        <h3>Upcoming Movie</h3>
      </Carousel>
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>{" "}
    </div>
  );
};

export default MovieSlide;
