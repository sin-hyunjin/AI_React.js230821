import React from "react";

const Header = () => {

  //로그인 버튼 클릭 시, 메인페이지로 이동하는 함수를 구현하시오.
  // 로그인 -> 로그아웃 텍스트 전환
  // 로그아웃 -> 로그인 텍스트로 전환

  return (
    <div className="header-box">
      <div className="header-box-logo">
        {/* 메인페이지로 이동하도록 URL를 지정하시오. */}
        <Link to={"메인"}>
          <img
            src="https://cdn.bonif.co.kr/resources/web/css/images/logo_gnb.png"
            alt="이미지"
          />
        </Link>
      </div>
      <div className="header-box-nav">
        <ul className="header-box-nav-list">

          {/* 각 메뉴버튼 클릭 시, 각 페이지가 보여지도록 URL를 정의하시오. */}
          <li><Link to={"메인으로 이동"}>메인</Link></li>
          <li><Link to={"메뉴리스트로 이동"}>메뉴 소개</Link></li>
        </ul>
      </div>
      <div className="header-box-util">
        <button>로그인</button>
      </div>
    </div>
  );
};

export default Header;
