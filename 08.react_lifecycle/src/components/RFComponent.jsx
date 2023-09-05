import { React, useEffect, useState } from 'react'

/*
  1. Life Cycle(생명주기)
    - React 컴포넌트의 생성부터 소멸까지 이르는 일련의 과정 
    - Mount, Update, UnMount

    Mount : 컴포넌트가 화면에 처음 그려진 상태 
            ex) api활용
    Update : props, state, force Update 변화가 발생했을 때 리렌더링되는 상태
            + 부모컴포넌트가 갱신되었을 떄도 동작 
            ex) 특정 state가 변경되었을 때 활용
    UnMount : 컴포넌트가 화면에 사라진 상태 
            - 함수형 컴포넌트에서는 useEffect() 사용 (클래스 컴포넌트에서는 사용불가)

            




*/
const RFComponent = () => {
  console.log('1.constructor 대체 => 함수초기화')

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)

  const handleIncrement = () => {
    setNum(num + 1)
  }
  const handleIncrement2 = () => {
    setNum(num - 1)
  }

  // 3.componentDidMount 대체
  // useEffect(()=>{실행할로직},[]) : 화면이 처음 렌더링될 떄 실행
  useEffect(() => {
    console.log('3.componenetDidmount 대체 => 화면 렌더링 완료!')
  }, [])

  // componenetDidmount 대체
  // useEffect(()=>{실행할로직}, [변화를 감지할 state])
  //  - 특정 state가 변화할 때 실행
  // useEffect(() => {
  //   console.log('componenetDidUpdate 대체 => []안에 state 설정 ')
  // }, [num])
  // useEffect(() => {
  //   console.log('num2 state 변화감지 ')
  // }, [num2])
  useEffect(() => {
    console.log('num 또는 num2 state 변화감지 ')
  }, [num, num2])

  /* https://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&appid={}*/
  return (
    <div>
      {console.log('2.render 대체 => return문 안에 ')}
      <p>
        RFComponent : {num}
        <br />
        <button onClick={handleIncrement}>증가</button>
      </p>
      <p>
        RFComponent : {num}
        <br />
        <button onClick={handleIncrement2}>감소</button>
      </p>
    </div>
  )
}

export default RFComponent
