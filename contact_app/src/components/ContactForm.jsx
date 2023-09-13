import React from 'react';
import { useDispatch } from 'react-redux';
export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="contact-container">
      <h1>연락처 APP</h1>
      <div className="contact-registration-leftbox">
        <input type="text" name="" id="" placeholder="이름을 입력해주세요." />
        <input
          type="text"
          name=""
          id=""
          placeholder="전화번호를 입력해주세요"
        />
        <button>등록</button>
      </div>
      <div className="contact-registration-rightbox">
        <input
          type="text"
          name=""
          id=""
          placeholder="검색할 키워드를 입력하세요."
        />
        <button>찾기</button>
      </div>
      <span className="contact-count">총 연락처: 0</span>
    </div>
  );
};
