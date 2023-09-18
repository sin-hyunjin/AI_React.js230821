import React, { useRef } from 'react'

export const Ex02 = () => {
  let userID = useRef()
  let userPW = useRef()
  const handleClick = () => {
    console.log(userID.current.value)
    console.log(userPW.current.value)

    const ID = userID.current.value
    const PW = userPW.current.value
    if (ID === '123' && PW === '123') {
      alert('로그인성공')
    } else {
      alert('로그인실패 ')
    }
  }

  return (
    <div>
      <form>
        ID : <input type="text" ref={userID}></input>
        PW : <input type="password" ref={userPW}></input>
        <input type="button" value="로그인" onClick={handleClick}></input>
      </form>
    </div>
  )
}
