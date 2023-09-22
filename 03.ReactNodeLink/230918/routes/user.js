/* User와 관련된 router들 모음 
  - 기능 : 회원가입, 중복체크, 로그인, 회원탈퇴, 로그아웃, 회원검색 
  - 작성자 : 신현진 (23.09.19)

*/

const express = require("express");
const router = express.Router();
const conn = require("../config/database");
const path = require("path");

// 회원가입 시, ID중복체크
router.post("/checkId", (req, res) => {
  console.log("check Id Router", req.body);

  // 객체 비구조화 할당
  let { id } = req.body;
  let sql = "select id from porject_member where id = ?";

  conn.query(sql, [id], (err, rows) => {
    console.log("rows", rows);
    console.log("err", err);

    if (rows.length > 0) {
      // 중복값이 있다면?
      res.json({ result: "dup" });
    } else {
      // 중복값이 없다면?
      res.json({ result: "uniq" });
    }
  });
});

// 회원가입 라우터
router.post("/join", (req, res) => {
  console.log("join Router", req.body);
  const { id, pw, name, email } = req.body.userInfo;

  let sql = "insert into porject_member values (?, ?, ?, ?)";
  conn.query(sql, [id, pw, name, email], (err, rows) => {
    if (rows) {
      res.json({ msg: "success" });
    } else {
      res.json({ msg: "failed" });
    }
  });
});

// 로그인 라우터
router.post("/login", (req, res) => {
  // console.log("login Router", req.body);
  const { id, pw } = req.body.login;
  console.log(id);
  let sql =
    "select id,user_name,email from porject_member where id = ? and pw = ?";

  conn.query(sql, [id, pw], (err, rows) => {
    console.log(rows);
    if (rows.length > 0) {
      res.json({
        msg: "seccess",
        user: rows[0],
      });
    } else {
      res.json({ msg: "failed" });
    }
  });
});

//로그아웃 라우터
// session을 server에 저장한 경우에는 해당 라우터로 와야함(기존)
// session을 front에 저장한 경우에는 로그아웃을 react에서 설정 가능
router.get("/logout");

// 비밀번호 수정 라우터
router.post("/checkPw", (req, res) => {
  let { id, currentPw, changePw } = req.body;
  console.log("받아온데이터 : ", id, currentPw, changePw);

  let sql =
    "select id,pw,user_name,email from porject_member where id = ? and pw = ?";
  conn.query(sql, [id, currentPw], (err, rows) => {
    console.log(rows.length);
    // 동일한 데이터가 없다면
    if (!rows.length > 0) {
      res.json({
        msg: "failed",
      });
      // 동일한 데이터가 있다면 updata 쿼리문 실행
    } else {
      let updataSql = "UPDATE porject_member SET pw = ? where id = ? ";
      conn.query(updataSql, [changePw, id], (err, rows) => {
        if (rows.changedRows) {
          res.json({
            msg: "success",
          });
        } else {
          res.json({
            msg: "error",
          });
        }
      });
    }
  });
});

// 이름, 이메일 수정 라우터
router.post("/modify", (req, res) => {
  console.log("modify router");
  let { id, new_name, new_email } = req.body;
  console.log(id, new_name, new_email);
  const sql = "UPDATE porject_member SET user_name = ?, email = ? WHERE id = ?";

  conn.query(sql, [new_name, new_email, id], (err, rows) => {
    console.log("정보수정 쿼리문 결과 : ", rows);

    if (rows) {
      res.json({
        msg: "seccess",
      });
    } else {
      res.json({
        msg: "failed",
      });
    }
  });
});

// 회원 탈퇴 라우터
router.post("/delete", (req, res) => {
  console.log("delete router", req.body.delInfo);
  let { id, pw } = req.body.delInfo;
  let sql = "DELETE FROM porject_member WHERE id = ? and pw = ? ";

  conn.query(sql, [id, pw], (err, rows) => {
    console.log(rows.length);
    if (rows) {
      res.json({ msg: "seccess" });
    } else {
      res.json({ msg: "failed" });
    }
  });
});

// 회원 정보 검색라우터
router.post("/select", (req, res) => {
  console.log("select router");
  let sql = "select id,user_name,email from porject_member";

  conn.query(sql, (err, rows) => {
    console.log(rows);
    res.json({ list: rows });
  });
});

// 라우터의 와일드카드
// 위에 훍고 왔던 router에 전부 해당하지 않으면, 이 라우터에 들어오겠다.
// router.get("*", (req, res) => {
//   console.log("main router");
//   res.sendFile(
//     path.join(__dirname, "..", "react-project", "build", "index.html")
//   );
// });

module.exports = router;
