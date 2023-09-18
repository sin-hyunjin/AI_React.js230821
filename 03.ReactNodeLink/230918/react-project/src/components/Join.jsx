import React from "react";
import { Form, Button } from "react-bootstrap";
const Join = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <hr />
      <Form>
        {/* 회원가입 */}
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" />
        </Form.Group>
        <div className="d-grid gap mb-3">
          <Button variant="light">중복체크</Button>
        </div>

        {/* password */}
        <Form.Group className="mb-3" controlId="formBasicPassWord">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>

        {/* password check */}
        <Form.Group className="mb-3" controlId="formBasicPassWordCheck">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>

        {/* name */}
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        {/* e-mail */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter Email" />
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
