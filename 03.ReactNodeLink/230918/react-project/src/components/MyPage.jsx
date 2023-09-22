import axios from "../axios";
import React, { useState } from "react";
import { useRef } from "react";
import { Table, Button, Form, Modal, Row, Col } from "react-bootstrap";

const MyPage = () => {
  const [show, setShow] = useState(false);
  const [btnText, setBtnText] = useState("비밀번호 변경");

  // 세션아이디가 필요
  const userObj = JSON.parse(sessionStorage.getItem("user"));

  const currentPw = useRef(); // 현재 비번
  const changePw = useRef(); // 바꿀 비번
  const pwRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /** 비밀번호를 수정하는 함수 */
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
          setBtnText("비밀번호 변경이 되었어용 축하드립니다~~~🎉");
          // 버튼 사용못하게 막음
          pwRef.current.disabled = "ture";
        } else if (res.data.msg == "failed") {
          // 사용자 잘못 입력
          alert("아이쿠! 비밀번호를 다시 확인해주세요.");
          handleClose();
        } else {
          // 서버문제
          alert("sorry🥹 죄송합니다. 다시 시도해주세요!");
          handleClose();
        }
      });
  };

  /** 개인정보 수정하는 함수 (이름, 이메일) */
  const handleModify = (e) => {
    e.preventDefault();
    console.log("handleModyfi function : ");
    axios
      .post("/user/modify", {
        id: userObj.id,
        new_name: nameRef.current.value,
        new_email: emailRef.current.value,
      })
      .then((res) => {
        console.log(res);

        if (res.data.msg === "seccess") {
          sessionStorage.setItem(
            "user",
            JSON.stringify({
              id: userObj.id,
              user_name: nameRef.current.value,
              email: emailRef.current.value,
            })
          );
          alert("정보가 변경되었습니다.");
          window.location.href = "/link";
        } else {
          alert("변경 실패...");
          window.location.href = "/mypage";
        }
      });
  };

  return (
    <div className="main-body">
      <h1>마이페이지</h1>
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
                    {/* 비밀번호 변경 텍스트 */}
                    {btnText}
                  </Button>
                </div>
              </td>
            </tr>
            <tr>
              <td>이름</td>
              <td>
                <Form.Control
                  type="text"
                  size="sm"
                  defaultValue={userObj.user_name}
                  ref={nameRef}
                />
              </td>
            </tr>
            <tr>
              <td>email</td>
              <td>
                <Form.Control
                  type="text"
                  size="sm"
                  defaultValue={userObj.email}
                  ref={emailRef}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <Row>
          <Col>
            <Button variant="info" size="lg" onClick={handleModify}>
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
