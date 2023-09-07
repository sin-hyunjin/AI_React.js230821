import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginState }) => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    setLoginState(true);
    navigate("/");
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <input type="text" name="" id="" placeholder="이메일 입력" />
      <input type="password" name="" id="" placeholder="비밀번호 입력" />
      <button onClick={handleLoginClick}>로그인하기</button>
    </div>
  );
};

export default Login;
