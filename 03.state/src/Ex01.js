import React from 'react'
import Like from './components/Like'
import imgSrc from './img/React.png'

/* 
  실습문제 1) 좋아요 기능을 가진 페이지 구현 
  STEP 1) 빈 하트를 클릭 시, 꽉 찬 하트로 변경해주기 ❤️
  STEP 2) 빈 하트를 클릭 시, 좋아요 1개로 변경해주기 
  STEP 3) '좋아요' 가 눌린 상태에서 클릭 시, 되돌리기
*/

const Ex01 = () => {
  return (
    <div>
      <img src={imgSrc} style={{ width: '100px' }}></img>
      <Like></Like>
    </div>
  )
}

export default Ex01
