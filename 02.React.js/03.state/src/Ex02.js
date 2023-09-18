import React from 'react'
import { useState } from 'react'
/*
  실습문제 2) 랜덤 숫자 맞추는 페이지 구현

  STEP1) 랜덤숫자를 생성한다. (범위: 1~3)
  STEP2) 사용자가 누른 버튼의 숫자를 가져온다
  STEP3) 사용자가 선택한 숫자와 랜덤숫자를 비교한다
          - 두 숫자가 동일할 경우: "정답입니다~!"
          - 두 숫자가 불일치한 경우: "오답입니다..."
*/

const Ex02 = () => {
  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(0)
  const [text, setText] = useState('')

  const handleNum = (e) => {
    const mynum = parseInt(e.target.innerText)
    const comNum = parseInt(Math.random() * 3 + 1)
    setNum(mynum)
    setNum1(comNum)

    if (mynum === comNum) {
      setText('정답입니다')
    } else {
      setText('오답입니다')
    }
    console.log(mynum, comNum)
    console.log('typeof num:', typeof num)
    console.log('typeof num1:', typeof num1)
    // console.log('랜덤숫자', ranNum)
  }

  return (
    <div>
      <button onClick={handleNum}>1</button>
      <button onClick={handleNum}>2</button>
      <button onClick={handleNum}>3</button>
      <p>내가입력한 숫자 :{num} </p>
      <p>랜덤한 숫자 : {num1}</p>
      <p>{text}</p>
    </div>
  )
}

export default Ex02
