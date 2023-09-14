import Button from 'react-bootstrap/Button';
import logo from '../img/logo.png';
import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// 공용데이터
import { NaverData } from '../App';

function Search() {
  const data = useContext(NaverData);

  const nav = useNavigate();
  const [keyword, setKeyword] = useState('');

  function getDate(category) {
    // 네이버 검색 api를 이용해서 데이터를 받아오겠습니다 .
    // 1. 검색 키워드(짜장면) , 2.검색 카테고리(뉴스)

    axios
      .get(`/v1/search/${category}.json`, {
        params: { query: keyword },
        headers: {
          'X-Naver-Client-Id': 'ofeMJ8ykcg6WJT_yBHLa',
          'X-Naver-Client-Secret': 'E2mpKCotad',
        },
      })
      .then((res) => {
        // 검색어에 따른 뉴스, 쇼핑, 책 데이터를 받아오게끔 만들기
        console.log(res);
        data.setSearchDate(res.data.items);
        nav('/news');
      });
  }

  return (
    <>
      <img className="logo" src={logo} alt="NAVER SEARCH API" />
      <div className="Search fixed">
        <div className="Category">
          {/* 카테고리 선택 버튼 */}
          <Button
            variant="outline-success"
            onClick={() => {
              getDate('news');
            }}
          >
            뉴스
          </Button>
          <Button
            variant="outline-success"
            onClick={() => {
              getDate('shop');
            }}
          >
            쇼핑
          </Button>
          <Button
            variant="outline-success"
            onClick={() => {
              getDate('book');
            }}
          >
            책
          </Button>
        </div>

        <br></br>

        <div className="search-wrap">
          {/* 검색어 입력 */}

          <input
            type="text"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}
export default Search;
