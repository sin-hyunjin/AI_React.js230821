/* User와 관련된 router들 모음 
  - 기능 : 회원가입, 중복체크, 로그인, 회원탈퇴, 로그아웃, 회원검색 
  - 작성자 : 신현진 (23.09.19)

*/

const express = require("express");
const router = express.Router();
const conn = require("../config/database");

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
  console.log("join Router");
});

module.exports = router;
