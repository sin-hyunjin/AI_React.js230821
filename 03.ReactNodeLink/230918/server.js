// require, import ..
const express = require("express");
const app = express();
const indexRouter = require("./routes");
const userRouter = require("./routes/user");

const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("express");
// 정적인 파일을 가져오기 위한 미들웨어
app.use(express.static(path.join(__dirname, "react-project", "build")));

// 오류해결ㄹ을 위한 미들웨어
// 1) cros 모듈 설치 : npm i cors
// 2) require
// 3) 사용
app.use(cors());
app.use(express.json());

// body-parser 미들웨어 대체 express 내장 모듈 사용
app.use(express.urlencoded({ extended: true }));

// router
app.use("/", indexRouter);
app.use("/user", userRouter);

// app.get('*') 는 Express 라우팅에서 사용되는 패턴 중, '와일드 카드' 로
// 모든 URL 경로에 대한 처리를 진행
// 단, 모든 라우팅 중, 가장 하단에 존재
app.get("*", (req, res) => {
  console.log("main router");
  res.sendFile(path.join(__dirname, "react-project", "build", "index.html"));
});
// Q. 3000번을 안쓰는 이유는? A. 나중에 React에서 쓸거임
app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log("port waiting ...");
});
