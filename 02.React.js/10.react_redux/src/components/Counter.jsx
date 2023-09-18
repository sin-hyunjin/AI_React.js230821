import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   increment,
//   descrement,
//   incrementByAmount,
// } from '../redux/reducers/counterSlice';
import { CountReducerActions } from '../redux/reducers/counterSlice';

/*
   1.useSelector() : store에 등록된 state를 접근하기 위한 함수
    사용법 : useSelector((state) => state.등록된 reducer 속성명.state 명)
    등록된 reducer 속성명 -> configureStore의 reducer에 정의된 객체 속성

   2.useDispatch() : state변경에 대한 요청을 보내는 함수
   사용법)
      const dispatch = useDispatch()
      dispatch(action) -> actiono에 대해 실행해줘! 

   3.Action : state를 변경하기 위한 명령 
    ex) counterSlice의 reducers속성에 정의된 increment, decrement 함수
*/

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  console.log('counterRuducer state:', count);

  return (
    <div className="container">
      <div className="box">
        <h2>Redux Toolkit활용 실습</h2>
        <h2>{count}</h2>
        <div>
          <button onClick={() => dispatch(CountReducerActions.increment())}>
            증가
          </button>
          <button onClick={() => dispatch(CountReducerActions.descrement())}>
            감소
          </button>
          <button
            onClick={() =>
              dispatch(CountReducerActions.incrementByAmount({ num: 2 }))
            }
          >
            2씩 증가
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
