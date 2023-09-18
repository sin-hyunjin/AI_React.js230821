import React from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import ResultItem from "./ResultItem";
import { useNavigate, useLocation } from 'react-router-dom'

const ImageResult = () => {
    const location = useLocation();
    // navigate에서 얹은 거 얘가 훔쳐옴.
  return (
    <div className="container">
      <SearchBox />
      <span className="title"><strong>{location.state.title}</strong>의 이미지 검색 결과입니다😗</span>
      <div className="result-container">
        {
            location.state.data.items.map((data, i) => (
                <ResultItem
                    key={i}
                    data={data}
                />
            ))
        }
      </div>
    </div>
  );
};

export default ImageResult;
