import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'

const SearchBox = () => {
    const [text, setText] = useState('');
    // 뭘 검색했는지.

    const [dataArr, setDataArr] = useState([]);
    // 검색한 거 담을 곳.

    const inputRef = useRef();
    // 포커스용. 그냥 하나로 쓸걸 ㅡㅡ

    const navigate = useNavigate();
    // 보내버리는 거.

    const doSearch = (e) => {
        const { key } = e;
        if(key !== 'Enter') return;
        // 엔터가 아니면 보내버림 멀리.
        getData(text);
    }
    const getData = async(text) => {
        const data = await axios.get(`/v1/search/image`, {
            params: { query: text },
            headers: {
                "X-Naver-Client-Id": "AQ2Q9JdsRGtNox9lt440",
                "X-Naver-Client-Secret": "En9iMUeVxA",
            }
        });
        setDataArr(prev => data.data);
        navigate('/search', {
            state: {
                data: data.data,
                title: text
            }
        })
        setText('');
        inputRef.current.focus();
    }
  return (
    <div className='search'>
      <h1>배고프니까 이미지 검색</h1>
      <input type="text"
        placeholder='검색어를 입력하세요.'
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        onKeyDown={(e)=>doSearch(e)}
        ref={inputRef}
      />
    </div>
  )
}

export default React.memo(SearchBox);
