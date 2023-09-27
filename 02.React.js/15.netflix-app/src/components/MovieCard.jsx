import React from "react";

const MovieCard = ({ movies, genresMovies }) => {
  const div_img = {
    backgroundImage: `url( https://www.themoviedb.org/t/p/w150_and_h225_face/${movies?.poster_path})`,
    width: "150px",
    height: "225px",
  };
  // 장르 ID를 기반으로 해당 장르의 이름을 찾아오는 함수
  const findGenreName = (id) => {
    const genre = genresMovies.find((genre) => genre.id === id);
    return genre ? genre.name : "Unknown Genre";
  };

  return (
    <div style={div_img} className="movie-card">
      <div className="overlay">
        <h4>{movies.title}</h4>

        <div className="genres">
          {movies.genre_ids.map((id) => (
            <span key={id} className="badge rounded-pill text-bg-danger">
              {findGenreName(id)}
            </span>
          ))}
        </div>

        <div>
          평점 : {movies.vote_average}점 |{" "}
          {movies.adult === true ? "청불" : "청소년"}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
