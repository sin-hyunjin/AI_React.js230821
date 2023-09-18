import { createSlice } from '@reduxjs/toolkit';

// createSlick() : state, reducer 함수를 관리하는 함수
// - state 초기화
// - state를 변경하는 함수 정의 => reducer

// name : reducer의 특정이름을 정의하는 속성
// initalState: statㄷ를 초기화하는 속성
// reducers : 컴포넌트에서 state변경요청 시 수행하는 Action기능을 정의하는 속성
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    // reducer함수 정의 시, 매개변수에 반드시 state 정의
    // 정의한 state는 initialState에 접근할 수 있음
    increment: (state) => {
      state.count += 1;
    },
    descrement: (state) => {
      state.count -= 1;
    },
    // squarecrement: (state) => {
    //   state.count += 2;
    // },
    // 넘겨받은 숫자를 이용해서 state를 변경하는 함수 이용하기
    // type: 명령 타입 ex) 숫자를 증가해라(incremnet), 숫자를감소해라(descrement)
    // payload : 외부로부터 넘겨받은 데이터를 저장하는 속성
    incrementByAmount: (state, action) => {
      console.log('counterSlice action', action);
      // action -> {type:'', payload: {num:2}}
      state.count += action.payload.num;
    },
  },
});

// 컴포넌트에서 reducer 함수를 실행할 수 있게 내보내기
// export const { increment, descrement, incrementByAmount } = counterSlice.actions;
export const CountReducerActions = counterSlice.actions;

// stote에서 접근할 수 있도록 내보내기
export default counterSlice.reducer;
