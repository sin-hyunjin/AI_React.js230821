import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { pro_no } = useParams();

  // useParams()는 URL 파라미터로부터 넘겨받은 값을 객체로 반환해주기 떄문에
  // const {파라미터1, 파라미터2, ....} = useParmes()로 받아서 처리
  return (
    <div>
      {" "}
      <h1>ProductDetail </h1>
      <p>상품번호 :{pro_no}</p>
    </div>
  );
};

export default ProductDetail;
