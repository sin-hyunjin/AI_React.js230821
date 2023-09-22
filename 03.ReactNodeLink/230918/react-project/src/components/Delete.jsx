import axios from "../axios";
import React, { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";

const Delete = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const [delInfo, setDelInfo] = useState({});

  //
  const handleDelete = (e) => {
    e.preventDefault();
    console.log(idRef.current.value, pwRef.current.value);

    setDelInfo({
      id: idRef.current.value,
      pw: pwRef.current.value,
    });
  };
  // 탈퇴입력창에 값이 입력이 확인되면 실행
  useEffect(() => {
    if (delInfo !== undefined) {
      axios.post("/user/delete", { delInfo: delInfo }).then((res) => {
        if (res.data.msg == "seccess") {
          sessionStorage.setItem("user", null);
          alert("다음에 또 만나요! ");
          window.location.href = "/link";
        } else {
          alert("아이디 혹은 비밀번호를 다시 확인해주세요. ");
        }
      });
    }
  }, []);
  return (
    <div>
      <h1>회원탈퇴</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter id" ref={idRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleDelete}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Delete;
