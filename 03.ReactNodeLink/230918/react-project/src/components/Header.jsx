import React from "react";
import { Card, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  // sessionStorege 값 가져오기
  const userObj = JSON.parse(sessionStorage.getItem("user"));

  // 로그아웃 하는 함수
  const handleLogout = () => {
    console.log("logout function");

    sessionStorage.setItem("user", null);
    window.location.href = "/link";
  };
  return (
    <Card.Body>
      <Nav variant="tabs">
        <Link to="/link">
          <Button variant="light">Main</Button>
        </Link>
        {userObj === null ? ( // 비회원 권한
          <>
            <Link to="/join">
              <Button variant="light">회원가입</Button>
            </Link>
            <Link to="/login">
              <Button variant="light">로그인</Button>
            </Link>
          </>
        ) : (
          // 회원 권한
          <>
            <Link to="/mypage">
              <Button variant="light">마이페이지</Button>
            </Link>
            <Link to="/list">
              <Button variant="light">회원검색</Button>
            </Link>
            <Link to="/delete">
              <Button variant="light">회원탈퇴</Button>
            </Link>
            <Button variant="light" onClick={handleLogout}>
              로그아웃
            </Button>
          </>
        )}
      </Nav>
    </Card.Body>
  );
};

export default Header;
