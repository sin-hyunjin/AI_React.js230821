import axios from "../axios";
import { React, useEffect, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const [login, setLogin] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`ID : ${idRef.current.value} , PW : ${pwRef.current.value}`);
    setLogin({
      id: idRef.current.value,
      pw: pwRef.current.value,
    });
  };
  // setLogin에 변화가 감지되었을떄
  useEffect(() => {
    console.log(login);
    if (login.id !== undefined) {
      axios.post("/user/login", { login: login }).then((res) => {
        console.log(res.data.msg);
        if (res.data.msg === "seccess") {
          console.log(res.data);
          alert("환영합니다");
          // window.location.href = "/";
        } else {
          alert("아이디 혹은 비밀번호를 확인해주세요.");
          // window.location.href = "/login";
        }
      });
    }
  }, [login]);
  return (
    <div>
      <h1>로그인</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="id" placeholder="Enter id" ref={idRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef} />
        </Form.Group>
        <div className="d-grid gap mb-3">
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
