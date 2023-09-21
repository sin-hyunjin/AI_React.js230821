import axios from "../axios";
import React, { useState } from "react";
import { useRef } from "react";
import { Table, Button, Form, Modal, Row, Col } from "react-bootstrap";

const MyPage = () => {
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("비밀번호 변경");
  const userObj = JSON.parse(sessionStorage.getItem("user"));
  const currentPw = useRef();
  const changePw = useRef();
  const pwRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handlePW = (e) => {
    e.preventDefault();
    console.log(
      `currentPw : ${currentPw.current.value} changePw : ${changePw.current.value}`
    );

    axios
      .post("/user/checkPw", {
        id: userObj.id,
        currentPw: currentPw.current.value,
        changePw: changePw.current.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.msg == "success") {
          setShow(false);
          setBtnText("비밀번호 변경 완료");
          // 버튼 사용못하게 막음
          pwRef.current.disabled = "ture";
        }
      });
  };
  return (
    <div className="main-body">
      s<h1>마이페이지</h1>
      <div align="center">
        <Table striped="columns">
          <tbody align="center">
            <tr>
              <td>ID</td>
              <td>{userObj.id}</td>
            </tr>
            <tr>
              <td>비밀번호</td>
              <td>
                <div className="d-grid gap-2">
                  <Button
                    variant="light"
                    size="sm"
                    onClick={handleShow}
                    ref={pwRef}
                  >
                    {btnText}
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <Form.Control type="text" size="sm" />
              </td>
            </tr>
            <tr>
              <td>email</td>
              <td>
                <Form.Control type="text" size="sm" />
              </td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col>
            <Button variant="info" size="lg">
              수정완료
            </Button>
          </Col>
        </Row>
      </div>
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>비밀번호 수정</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label>현재 비밀번호</Form.Label>
          <Form.Control type="password" size="sm" ref={currentPw} />
          <Form.Label>바꿀 비밀번호</Form.Label>
          <Form.Control type="password" size="sm" ref={changePw} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handlePW}>
            비밀번호 수정
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyPage;
