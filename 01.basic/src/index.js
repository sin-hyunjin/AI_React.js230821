import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// JSX 문법 및 특징 정리
// import App from './App';

// JSX문법을 활용한 실습
import './AppSample'
import reportWebVitals from './reportWebVitals'
import AppSample from './AppSample'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppSample />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
