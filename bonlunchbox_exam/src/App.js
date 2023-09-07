import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Content from './components/Content'
import GoodsItem from './components/GoodsItem'
import Main from './page/Main'
function App() {
  // 로그인상태, 상품리스트를 관리하는 state를 정의하시오.
  // 로그인상태 : authenticate
  // 상품리스트 : goods
  const [authenticate, setAuthenticate] = useState()

  return (
    <div className="container">
      {/* Header컴포넌트가 출력되도록 구현하시오. */}
      <Header />

      {/* 
          메인페이지, 로그인페이지, 메뉴리스트, 메뉴상세페이지로 이동되도록
          Route를 구성하시오.
        */}
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
      {/* Footer컴포넌트가 출력되도록 구현하시오. */}
    </div>
  )
}

export default App
