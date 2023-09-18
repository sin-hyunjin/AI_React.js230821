import React from 'react'

/* 
  1. 사용자로부터 id, pw를 입력받는다 (prompt() 활용)
  2. 성공여부에 따라 다른 화면을 출력한다.
    성공시) LoginSuccess 컴포넌트 실행 -> "환영합니다!"
    실패시) LoginFail 컴포넌트 실행 -> "아이디 또는 패스워드 잘못되었습니다."
            + 아이디만 틀린 경우 또는 패스워드가 틀린 경우를 구분하여 메세지 출력해보기 
*/
const AppSample = () => {
  // 임시 유저정보
  const user_id = '123'
  const user_pw = '123'

  // 입력값
  let input_id = prompt('아이디를 입력해주세요')
  let input_pw = prompt('비밀번호를 입력해주세요')
  console.log(input_id, input_pw)

  // 유저 id와 입력한 id 또는 pw가 같은경우를 변수에 담음
  const ID = input_id === user_id
  const PW = input_pw === user_pw

  // 로그인 로직
  let text = ''
  if (ID && PW) {
    text = '환영합니다!!'
  } else if (ID && input_pw !== user_pw) {
    text = '비밀번호가 잘못되었습니다.'
  } else if (input_id !== user_id && PW) {
    text = '아이디가 잘못되었습니다. '
  } else {
    text = '아이디 또는 패스워드 잘못되었습니다.'
  }

  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

export default AppSample
