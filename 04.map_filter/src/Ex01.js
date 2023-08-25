import React from 'react'
import { useState } from 'react'

/*
  map() 함수
    - 배열 내 모든 요소를 각각 접근해서 원하는 형태로 변환한 후 
    새로운 배열로 변환해주는 함수 
    - 문법 : 배열객체.map((item, index) => {  }) -> return문 위쪽 
            {배열객체.map((item, index) => {  })}  ->  return문 안쪽 
    item : 현재 배열 내 값
    index: 현재 배열 내 값의 인덱스
*/
export const Ex01 = () => {
  const [members, setMembers] = useState([
    { id: 1, name: '정은우', task: 'Front-end' },
    { id: 2, name: '김도형', task: 'Database' },
    { id: 3, name: '김형균', task: 'Back-end' },
    { id: 4, name: '나범수', task: 'Front-end' },
    { id: 5, name: '신현진', task: 'Front-end' },
    { id: 6, name: '장유빈', task: 'Chat-bot' },
  ])

  return (
    <div>
      {members.map((member) => (
        <p key={member.id}>
          <span>이름 : {member.name}</span>
          <br></br>
          <span>업무 : {member.task}</span>
        </p>
      ))}
    </div>
  )
}
