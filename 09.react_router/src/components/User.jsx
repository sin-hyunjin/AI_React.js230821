import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div>
      <h1>마이페이지 </h1>
      <Link to={"/"}>홈으로 이동하기</Link>
    </div>
  );
};

export default User;
