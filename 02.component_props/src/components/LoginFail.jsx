import React from 'react'

const LoginFail = ({ id, pw }) => {
  let result = ''

  if (id !== '123') {
    result = '아이디가 일치하지 않습니다.'
  } else {
    if (pw !== '123') {
      result = '비밀번호가 일치하지 않습니다.'
    }
  }

  return (
    <div>
      <h1>{result}</h1>
    </div>
  )
}

export default LoginFail
