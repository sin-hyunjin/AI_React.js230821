import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Posts from "./components/Posts";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import ProductDetail2 from "./components/ProductDetail2";
import User from "./components/User";

function App() {
  const [loginState, setLoginState] = useState(false);

  // loginState 값이 업데이트 되었을 때 로그인 상태값 출력
  useEffect(() => {
    console.log("로그인 상태 :", loginState);
  }, [loginState]);

  // 프라이빗 라우트를 정의합니다. 로그인 상태에 따라 페이지를 렌더링합니다.
  const PrivateRoute = () => {
    return loginState ? <User to={"/user"} /> : <Navigate to={"/login"} />;
  };

  return (
    <Routes>
      {/* 메인 페이지로 가겠다는 의미 */}
      <Route
        path="/"
        element={<Home setLoginState={setLoginState} loginState={loginState} />}
      />
      <Route path="/about" element={<About />} />
      <Route
        path="/login"
        element={
          <Login setLoginState={setLoginState} loginState={loginState} />
        }
      ></Route>

      <Route path="/product" element={<Product />} />

      {/* URL 파라미터 형식으로 Route 구성하기 */}
      <Route path="/product/:pro_no" element={<ProductDetail />}></Route>
      <Route path="/productDetail2" element={<ProductDetail2 />}></Route>

      {/* 사용자 페이지를 프라이빗 라우트로 설정. */}
      <Route
        path="/user"
        element={
          <PrivateRoute setLoginState={setLoginState} loginState={loginState} />
        }
      >
        {/* axios를 이용하여 json-server 데이터 요청하는 실습*/}
      </Route>
      <Route path="/posts" element={<Posts />}></Route>
    </Routes>
  );
}

export default App;
