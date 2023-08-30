import './App.css'
import { useState, useRef } from 'react'
/* 

- 컴포넌트 내부에 저장공간 & 특성 DOM 요소에 접급하게 위해 사용

2. ref 특징
  - 화면이 리렌더링 되더라도 Ref 내값은 그대로 유지 */
function App() {
  let countVar = 0
  const [count, setCount] = useState(0)
  let countRef = useRef(0)

  const handleClick1 = () => {
    countVar += 1
    console.log(`countVar: ${countVar}`)
  }
  const handleClick2 = () => {
    setCount(count + 1)
    console.log(`setCount: ${setCount()}`)
  }
  const handleClick3 = () => {
    countRef.current += 1
    console.log(`countRef.current: ${countRef.current}`)
  }

  return (
    <div>
      <p>var: {countVar}</p>
      <p>state: {count}</p>
      <p>ref: {countRef.current} </p>
      <button onClick={handleClick1}>var + 1</button>
      <button onClick={handleClick2}>state + 1</button>
      <button onClick={handleClick3}>ref + 1</button>
    </div>
  )
}

export default App
