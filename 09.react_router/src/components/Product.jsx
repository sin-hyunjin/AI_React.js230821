import React from "react";
import { useNavigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const Product = () => {
  const navigate = useNavigate();

  const goToProductDetail = () => {
    navigate("/ProductDetail2?cate=shirt");
  };
  return (
    <div>
      <ProductDetail />
      <button onClick={goToProductDetail}>상품상세페이지로 이동하기!</button>
    </div>
  );
};

export default Product;
