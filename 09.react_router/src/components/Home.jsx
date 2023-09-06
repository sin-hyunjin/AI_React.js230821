import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToProduct = () => {
    navigate("/product?name");
  };
  return (
    <div>
      <h1>HOME</h1>
      <Link to={"/about"} style={{ textDecoration: "none", color: "blue" }}>
        About 페이지로 이동하기{" "}
      </Link>

      <button onClick={goToProduct}>상품페이지 이동하기!</button>
    </div>
  );
};

export default Home;
