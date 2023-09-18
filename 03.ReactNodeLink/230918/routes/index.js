/* 페이지 이동을 다뤄주는 라우터 모음  
 - 메인페이지
 - 작성자 : 신현진 (23-09-18 10:15)
*/

// main page
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/link", (req, res) => {
  console.log("main router");
  res.sendFile(
    path.join(__dirname, "..", "react-project", "build", "index.html")
  );
});

module.exports = router;
