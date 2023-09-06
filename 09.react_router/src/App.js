import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import ProductDetail2 from "./components/ProductDetail2";

function App() {
  return (
    <Routes>
      {/* 메인페이지로 가겠다는 의미  */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />

      {/* URL 파라미터 형식으로 Route 구성하기 */}
      <Route path="/product/:pro_no" element={<ProductDetail />}></Route>
      <Route path="/productDetail2" element={<ProductDetail2 />}></Route>
    </Routes>
  );
}

export default App;
