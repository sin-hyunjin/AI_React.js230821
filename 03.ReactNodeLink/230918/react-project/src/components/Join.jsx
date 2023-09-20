import { React, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../axios";

const Join = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const pw2Ref = useRef();
  const nameRef = useRef();
  const addRef = useRef();

  /** ID의 중복체크를 해주는 함수 */
  const checkId = () => {
    console.log("사용자 입력 아이디", idRef.current.value);

    // 사용자가 ID input 안에 값을 넣었는가?
    if (idRef.current.value !== "") {
      // 데이터 전송
      axios.post("/user/checkId", { id: idRef.current.value }).then((res) => {
        console.log("중복체크 결과", res.data.result);
        if (res.data.result == "uniq") {
          idRef.current.disabled = true;
        } else {
          idRef.current.value = "";
        }
      });
    }
  };
  return (
    <div>
      <h1>회원가입</h1>
      <hr />
      <Form>
        {/* 회원가입 */}
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" ref={idRef} />
        </Form.Group>
        <div className="d-grid gap mb-3">
          <Button variant="light" onClick={checkId}>
            중복체크
          </Button>
        </div>

        {/* password */}
        <Form.Group className="mb-3" controlId="formBasicPassWord">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pwRef} />
        </Form.Group>

        {/* password check */}
        <Form.Group className="mb-3" controlId="formBasicPassWordCheck">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={pw2Ref} />
        </Form.Group>

        {/* name */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" ref={nameRef} />
        </Form.Group>

        {/* e-mail */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" ref={addRef} />
        </Form.Group>

        {/* 회원가입 버튼 */}
        <div className="d-grid gap mb-3">
          <Button variant="dark" type="submit">
            회원가입
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Join;
