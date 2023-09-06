import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductDetail2 = () => {
  const [query, setQuery] = useSearchParams();

  // cate에 연결
  console.log("Product페이지로부터 전달받은 값", query.get("cate"));
  return <div>ProductDetail2</div>;
};

export default ProductDetail2;
