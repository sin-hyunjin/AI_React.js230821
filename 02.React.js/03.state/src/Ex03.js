import React from 'react'
import './style/ex03.css'
import Board from './components/Board'
/*
  실습문제 ) 주사위 게임 페이지 구현
  STEP1) 사용자가 "던지기" 버튼을 누른다.
  STEP2) 주사위 눈이 랜덤으로 표시된다.
    - 랜덤숫자를 이용해서 이미지 띄우기
  STEP3) 사용자의 주사의 눈과 컴퓨터의 주사위 눈을 비교한다.
    - 무승부 : alert() 를 활용하여 "무승부!" 창 뜨위기
    - 사용자가 이겼을경우 : 사용자 점수 + 1 
    - 컴퓨터가 이겼을 경우 : 컴퓨터 점수 + 1
  STEP4) "REst" 버튼 클릭 시 모든 내용 초기화
    - 점수, 이미지

  [만들어야 할 state]
  - 점수
  - 주사위 숫자
  - 주사위 이미지 경로 

  [만들어야 할 Componenet]
  - Board.jsx
*/

const Ex03 = () => {
  return (
    <div className="main-container">
      <div className="box-cotainer">
        <h1 className="h1">주사위 게임</h1>
        <Board></Board>
      </div>
    </div>
  )
}

export default Ex03
