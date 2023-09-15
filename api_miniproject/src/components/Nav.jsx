import React from 'react';
import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { NaverData } from '../App';
import Main from './Main';
const Nav = () => {
  const data = useContext(NaverData);
  const nav = useNavigate();
  const [keyword, setKeyword] = useState('');

  function getDate() {
    // 네이버 검색 api를 이용해서 데이터를 받아오겠습니다 .
    // 1. 검색 키워드(짜장면) , 2.검색 카테고리(뉴스)

    axios
      .get(`/v1/search/image`, {
        params: { query: keyword },
        headers: {
          'X-Naver-Client-Id': 'ofeMJ8ykcg6WJT_yBHLa',
          'X-Naver-Client-Secret': 'E2mpKCotad',
        },
      })
      .then((res) => {
        // 검색 결과를 setSearchData로 설정
        console.log(res);
        data.setSearchData(res.data);
        // nav('/');
      })
      .catch((error) => {
        console.error('API 요청 에러:', error);
      });
  }
  return (
    <>
      <div className="nav-container">KaKao 들어갈꺼니까</div>
      <div className="nav-search">
        {/* 검색창 입력 */}
        <input
          type="text"
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          placeholder="검색어입력"
        />
        <div className="nav_button-keyword">
          <button
            variant="outline-success"
            onClick={() => {
              getDate();
            }}
          >
            무대모음
          </button>
          <button>패션</button>
          <button>헤어스타일</button>
        </div>
      </div>
      <Main></Main>
    </>
  );
};

export default Nav;
