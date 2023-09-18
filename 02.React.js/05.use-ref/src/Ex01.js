import React, { useRef } from 'react'

export const Ex01 = () => {
  const handleClick = () => {
    let input = document.querySelector('input[type="text"]')
    console.log(input.value)
  }

  let inputRef = useRef()
  const handleClick2 = () => {
    console.log(inputRef) // ref
    console.log(inputRef.current) // input
    console.log(inputRef.current.value) // input.value
  }

  return (
    <div>
      <h3>dom</h3>
      <form>
        <input type="text"></input>
        <input type="button" value="클릭" onClick={handleClick}></input>
      </form>
      <h3>Ref</h3>
      <form>
        <input type="text" ref={inputRef}></input>
        <input type="button" value="클릭" onClick={handleClick2}></input>
      </form>
    </div>
  )
}
