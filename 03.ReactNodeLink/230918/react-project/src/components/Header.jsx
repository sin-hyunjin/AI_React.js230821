import React from "react";
import { Card, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  // 로그아웃 하는 함수
  const handleLogout = () => {
    console.log("logout function");

    sessionStorage.setItem("user", null);
    window.location.href = "/link";
  };
  return (
    <Card.Body>
      <Nav variant="tabs">
        {" "}
        <Link to={"/link"}>
          <Button variant="light">Main</Button>
        </Link>
        {/* 비회원 권한 */}
        <Link to={"/join"}>
          <Button variant="light">회원가입</Button>
        </Link>
        <Link to={"/login"}>
          <Button variant="light">로그인</Button>
        </Link>
        {/* 회원 권한 */}
        <Link to={"/mypage"}>
          <Button variant="light">마이페이지</Button>
        </Link>
        <Link to={"/list"}>
          <Button variant="light">회원검색</Button>
        </Link>
        <Link to={"/delete"}>
          <Button variant="light">회원탈퇴</Button>
        </Link>
        {/* Case 1) 서버에 세선 저장한 경우 = Link */}
        {/* <Link to={"/user/out"}> */}
        {/* Case 2) 브라우저에 세션 저장한 경우  */}
        <Button variant="light" onClick={handleLogout}>
          로그아웃
        </Button>
        {/* </Link> */}
      </Nav>
    </Card.Body>
  );
};

export default Header;
