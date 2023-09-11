import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import Content from './components/Content'
import GoodsItem from './components/GoodsItem'
import Main from './page/Main'
import Footer from './components/Footer'
import Login from './page/Login'
import GoodsList from './page/GoodsList'
import GoodsDetail from './page/GoodsDetail'
import PrivateRoute from './routes/PrivateRoute'
function App() {
  // 로그인상태, 상품리스트를 관리하는 state를 정의하시오.
  // 로그인상태 : authenticate
  // 상품리스트 : goods
  const [authenticate, setAuthenticate] = useState(true) // 로그인상태
  // map 함수는 초기값을 배열로 줘야 가능하다.
  const [goods, setGoods] = useState([]) // 상품리스트

  return (
    <div className="container">
      {/* Header컴포넌트가 출력되도록 구현하시오. */}
      <Header authenticate={authenticate} setAuthenticate={setAuthenticate} />

      {/* 
          메인페이지, 로그인페이지, 메뉴리스트, 메뉴상세페이지로 이동되도록
          Route를 구성하시오.
        */}
      <Routes>
        {/* 메인페이지  */}
        <Route path="/" element={<Main></Main>}></Route>
        {/* 로그인페이지  */}
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        ></Route>
        {/* 메뉴리스트  */}
        <Route
          path="/menu/list"
          element={<GoodsList goods={goods} setGoods={setGoods} />}
        ></Route>
        {/* 메뉴아이디  */}

        {/* :id는 동적 매개변수로, 실제로는 어떤 값을 가질 수 있는 와일드카드입니다. 예를 들어, /menu/1, /menu/2, /menu/abc 등 다양한 값을 가질 수 있다 이 경로는 /menu/ 다음에 오는 어떤 값에도 일치 */}
        <Route
          path="/menu/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        ></Route>
      </Routes>
      {/* Footer컴포넌트가 출력되도록 구현하시오. */}
      <Footer />
    </div>
  )
}

export default App
