import axios from "../axios";
import { React, useEffect, useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
const Login = () => {
  const idRef = useRef();
  const pwRef = useRef();
  const [login, setLogin] = useState({});

  /** 로그인 기능을 해주는 함수 */
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`ID : ${idRef.current.value} , PW : ${pwRef.current.value}`);
    setLogin({
      id: idRef.current.value,
      pw: pwRef.current.value,
    });

    /**  Case : 데이터를 따로 객체로 보관하지 않고 바로 axios 보내주기
     * 프로젝트 시, 넘겨줘야하는 데이터의 그룹이 2개 이상이면 따로 객체화 => useEffect
     * 넘겨줘야하는 데이터의 그룹이 1개라면 바로 보내주느 방법
    
    axios.post("/user/login", {
      id: idRef.current.value,
      pw: pwRef.current.value,
      
    });
     */
  };
  // setLogin에 변화가 감지되었을떄
  useEffect(() => {
    console.log(login);
    if (login.id !== undefined) {
      axios.post("/user/login", { login: login }).then((res) => {
        console.log(res.data);

        if (res.data.msg === "seccess") {
          /** 실제 로그인 세션을 이용하는 경우에는 server단에 있는 
               *  session을 사용하는게 보안상 좋음
               * => 그러나, 보안이 중요하지 않는 간단한 데이터를 저장해야할 때
                    front단에 있는 sessionStorage, localStorage 사용할 수 있음
                 => 지금은 로그인으로 사용방법의 예를 보여주는 것 뿐,
                    실제 로그인 세션은 back-end 세션으로 사용하세요 
                 => 프로젝트? OK, 현업가서는 사용X 

                1) localStorage
                  - 브라우저를 꺼도 데이터가 남아있음
                  - 7일간 보지않기, 자동 로그인, 장바구니

                  - localStorage 등록 : localStorage.setItem('key', 'value)
                  - localStorage 아이템 읽기 : localStorage.getItem('key')
                  - localStorage 값 삭제 : localStorage.removeItem('key')
              
                2) sessionStorage
                  - 브라우저를 끄면 날아가지만, 페이지 안에는 남아있음 
                  - 로그인 기능 (front만 있을 때 )

                  - sessionStorage 등록 : sessionStorage.setItem('key', 'value)
                  - sessionStorage 아이템 읽기 : sessionStorage.getItem('key')
                  - sessionStorage 값 삭제 : sessionStorage.removeItem('key')
               */

          // 저장소에 객체 저장하는 방법
          sessionStorage.setItem("user", JSON.stringify(res.data.user));
          console.log(res.data);
          alert("환영합니다");
          window.location.href = "/link";
        } else {
          alert("아이디 혹은 비밀번호를 확인해주세요.");
          window.location.href = "/login";
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
          <Form.Control type="id" placeholder="Enter ID" ref={idRef} />
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
