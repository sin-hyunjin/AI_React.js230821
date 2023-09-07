import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
/*
  실습 ) 
  1. 로그인 상태를 판단하여 "로그인" or "로그아웃"으로 출력해보기
    - loginState를 이용해 조건부 렌더링으로 출력 

  2. "로그아웃" 버튼을 클릭했을 떄, "로그인" 상태로 변환하기 
    - useNavigate를 이용해 loginState값 판단 후 상태값 전환 


*/
const Home = ({ loginState, setLoginState }) => {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate("/product?name");
  };

  const handleLogin = () => {
    if (loginState) {
      setLoginState(false);
    } else {
      navigate("/login");
    }
  };

  const goToMyPage = () => {
    if (loginState) {
      navigate("/user");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <h1>HOME</h1>
      <Link to={"/about"} style={{ textDecoration: "none", color: "blue" }}>
        About 페이지로 이동하기{" "}
      </Link>

      <button onClick={goToProduct}>상품페이지 이동하기!</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          margin: "10px",
        }}
      >
        {/* <Link to={"/login"}>로그인하기</Link> */}
        <button onClick={handleLogin}>
          {loginState ? "로그아웃" : "로그인"}
        </button>
        {/* 마이페이지 이동하기 */}
        {loginState ? (
          <Link className="home-link" onClick={goToMyPage}>
            마이페이지 이동하기
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Home;
