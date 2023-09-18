import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'style/ex03.css'
const Board = () => {
  // [만들어야 할 state]
  // - 점수
  // - 주사위 숫자
  // - 주사위 이미지 경로
  // 무승부 : alert() 를 활용하여 "무승부!" 창 뜨위기
  // - 사용자가 이겼을경우 : 사용자 점수 + 1
  // - 컴퓨터가 이겼을 경우 : 컴퓨터 점수 + 1
  const [myscore, setMyScore] = useState(0)
  const [score, setScore] = useState(0)
  const [dicenum, setDiceNum] = useState('/img/dice1.png')
  const [diceimg, setDiceImg] = useState('/img/dice1.png')
  const [isDraw, setIsDraw] = useState('none')

  const handleBtnClick = () => {
    // 랜덤한 숫자
    const mydice = parseInt(Math.random() * 6 + 1) // 유저주사위
    const comdice = parseInt(Math.random() * 6 + 1) // 컴주사위
    let myNum = `/img/dice${mydice}.png`
    let comNum = `/img/dice${comdice}.png`

    setDiceNum(myNum)
    setDiceImg(comNum)

    // 무승부 텍스트가 표시되었을때 없어지는 로직
    if (isDraw === 'block') {
      setIsDraw('none')
    }

    // console.log(isDraw)

    // 주사위 승부시 점수 올라가는 로직
    if (mydice > comdice) {
      setMyScore(myscore + 1)
    } else if (mydice < comdice) {
      setScore((prevNum) => prevNum + 1)
    } else {
      setIsDraw('block')
    }

    //  숫자가 3이 되었을때 승
    console.log('위', myscore)
  }

  const Draw = () => {
    if (myscore === 5) {
      alert('내가 이겼다!')
      handleResetClick()
    } else if (score === 5) {
      alert('져버렸네...')
      handleResetClick()
    }
  }

  // 초기화 버튼
  const handleResetClick = () => {
    setMyScore(0)
    setScore(0)
    setIsDraw('none')
  }
  return (
    <div>
      <div className="cast-box">
        <Button className="button" onClick={handleBtnClick}>
          던지기
        </Button>
        <button className="button btnbox" onClick={handleResetClick}>
          RESET
        </button>
      </div>
      <div className="dice-container">
        <div>
          <p>나</p>
          <img className="dice" src={dicenum} alt="이미지없음"></img>
          <p>현재 점수는?</p>
          <p>{myscore}</p>
        </div>
        <div>
          <p>컴퓨터</p>
          <img className="dice" src={diceimg} alt="이미지없음"></img>
          <p>현재 점수는?</p>
          <p>{score}</p>
        </div>
      </div>
      <span style={{ display: isDraw }}>무승부</span>
    </div>
  )
}

export default Board
