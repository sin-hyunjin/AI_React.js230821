import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../api";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { MovieReducerActions } from "../redux/reducers/movieSlice";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const upcomingMovies = useSelector((state) => state.movie.upcomingMovies);
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  const genresMovies = useSelector((state) => state.movie.genreMovies);
  const dispatch = useDispatch();
  // console.log("popularMovies :", popularMovies);
  // console.log("upcomingMovies :", upcomingMovies);
  // console.log("topRatedMovies :", topRatedMovies);
  console.log(genresMovies);
  /**영화 api 데이터  axios.get 방식으로 가져오고 변수명에 저장
   * 
  const upcomingReq = async () => {
    let res = await axios.get("/movie/upcoming?language=en-US&page=1");
    console.log("upcomingReq data : ", res);
  };
  const topRatedReq = async () => {
    let res = await axios.get("/movie/top_rated?language=en-US&page=1");
    console.log("topRatedReq data : ", res);
  };
  const popularReq = async () => {
    let res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
    );
    console.log("popular data : ", res);
  };
*/
  // 3가지 종류의 영화목록을 묶어서 요청하기
  // Promise.all() : 모든 요청에 대한 응답이 올 떄까지 대기
  const getMovieList = async () => {
    setLoading(true);

    const upcomingList = axios.get("/movie/upcoming?language=ko-KR&page=1");
    const topRatedList = axios.get("/movie/top_rated?language=ko-KR&page=1");
    const popularList = axios.get("/movie/popular?language=ko-KR&page=1");
    const genreList = axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=ko"
    );

    const [popular, topRated, upcoming, genre] = await Promise.all([
      upcomingList,
      topRatedList,
      popularList,
      genreList,
    ]);
    setLoading(false);
    // console.log("popular data :", popular.data);

    // console.log("topRated data :", topRated.data);
    // console.log("upcoming data :", upcoming.data);
    console.log(genre.data);
    dispatch(
      MovieReducerActions.initData({
        popular: popular.data,
        topRated: topRated.data,
        upcoming: upcoming.data,
        genre: genre.data,
      })
    );
  };

  useEffect(() => {
    getMovieList();
    // upcomingReq();
    // topRatedReq();
    // popularReq();
  }, []);
  // /movie/upcoming

  // true: 데이터를 가져오기 전
  // false : 데이터를 가져온후
  return (
    <div>
      {loading ? (
        <ClipLoader
          color="#ffffff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          {/* {popularMovies && <Banner movie={popularMovies[0]}></Banner>} */}
          <Banner movie={popularMovies[0]}></Banner>
          <MovieSlide
            movies={popularMovies}
            upcomingMovies={upcomingMovies}
            topRatedMovies={topRatedMovies}
            genresMovies={genresMovies}
          ></MovieSlide>
        </div>
      )}
    </div>
  );
};

export default Home;
