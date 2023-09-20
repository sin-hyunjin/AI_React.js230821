import { useState } from "react";
import { useEffect } from "react";
import { React, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../axios";

const Join = () => {
  /** use로 시작하는 애들은 : React Hooks
   * 함수형으로 가면 사용할 수 없는 기능 : LifeCycle, state, ref ...
   * class   function
   * Life Cycle  useEffect
   * state     use state
   * React Hook을 사용하고 싶으면 ?  전부 컴포넌트 안쪽 상단에 작성(Constructor)
   */
  const idRef = useRef();
  const pwRef = useRef();
  const pw2Ref = useRef();
  const nameRef = useRef();
  const addRef = useRef();
  const spanRef = useRef();
  const [text, setText] = useState("");
  const [pwText, setPwText] = useState("");
  const [color, setColor] = useState("");
  const [userData, setUserData] = useState({});

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
          spanRef.current.style = "color:lightblue";
          setColor(`gray`);
          setText(" ☑︎ 사용 가능한 아이디입니다.");
        } else {
          idRef.current.value = "";
          idRef.current.focus();
          spanRef.current.style = "color:red";
          setColor("lightred");
          setText(" 사용불가능한 아이디입니다. 다른 아이디를 입력해주세요");
        }
      });
    }
  };

  /** 회원가입 기능을 하는 함수 */
  const handleJoin = (e) => {
    e.preventDefault();
    /** 사용자 입력 정보 log 확인  */
    // console.log("사용자 입력 아이디 : ", idRef.current.value);
    // console.log("사용자 입력 비밀번호 : ", pwRef.current.value);
    // console.log("사용자 입력 비밀번호확인 : ", pw2Ref.current.value);
    // console.log("사용자 입력 이름 : ", nameRef.current.value);
    // console.log("사용자 입력 이메일 : ", addRef.current.value);
    /**유저 정보 객체형태로 저장 */
    setUserData({
      id: idRef.current.value,
      pw: pwRef.current.value,
      name: nameRef.current.value,
      email: addRef.current.value,
    });
  };
  /** 만약 userData에 변화가 감지 된다면, 그 때 axios 처리 */
  useEffect(() => {
    // 조건1 ) 첫페이지 렌더링 제외
    // 조건2 ) 비번1, 비번2가 다를 때 제외
    if (userData.id !== undefined) {
      if (pwRef.current.value === pw2Ref.current.value) {
        // 회원가입 데이터 전송 시작!
        axios.post("/user/join", { userInfo: userData }).then((res) => {
          console.log(res.data);
          if (res.data.msg === "success") {
            alert("환영합니다");
            window.location.href = "/";
          } else {
            alert("Return");
            window.location.href = "/join";
          }
        });
      } else {
        //비번이 다를경우
        setPwText("비밀번호가 일치❌. 비밀번호를 다시 입력해주세요.");
      }
    }
  }, [userData]);

  return (
    <div>
      <h1>회원가입</h1>
      <hr />
      <Form onSubmit={handleJoin}>
        {/* 회원가입 */}
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" ref={idRef} />
        </Form.Group>
        <div className="d-grid gap mb-3">
          <Button variant="light" onClick={checkId}>
            중복체크
          </Button>
          <span ref={spanRef} style={{ color: { color } }}>
            {text}
          </span>
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
          <span ref={spanRef}>{pwText}</span>
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
