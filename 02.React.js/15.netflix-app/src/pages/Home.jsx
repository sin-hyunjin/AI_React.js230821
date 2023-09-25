import { React, useEffect } from "react";
import axios from "../api";
const Home = () => {
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
    const upcomingList = axios.get("/movie/upcoming?language=en-US&page=1");
    const topRatedList = axios.get("/movie/top_rated?language=en-US&page=1");
    const popularList = axios.get("/movie/popular?language=en-US&page=1");

    const [popular, topRated, upcoming] = await Promise.all([
      upcomingList,
      topRatedList,
      popularList,
    ]);
    console.log("popular data :", popular.data);
    console.log("topRated data :", topRated.data);
    console.log("upcoming data :", upcoming.data);
  };

  useEffect(() => {
    getMovieList();
    // upcomingReq();
    // topRatedReq();
    // popularReq();
  }, []);
  // /movie/upcoming

  return <div></div>;
};

export default Home;
