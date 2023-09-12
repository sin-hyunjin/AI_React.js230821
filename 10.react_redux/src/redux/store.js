import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import logger from 'redux-logger';
/*
    Store : state, reducer, 내장함수 등을 관리하는 역할 
            하나의 어플리케이션에 하나의 Store만 생성

    configureStore() : store를 생성하는 함수 
 
*/
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
