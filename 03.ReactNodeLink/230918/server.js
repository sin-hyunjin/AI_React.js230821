// require, import ..
const express = require("express");
const app = express();
const indexRouter = require("./routes");
const path = require("path");

// 정적인 파일을 가져오기 위한 미들웨어
app.use(express.static(path.join(__dirname, "react-project", "build")));

// router
app.use("/", indexRouter);

// Q. 3000번을 안쓰는 이유는? A. 나중에 React에서 쓸거임
app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log("port waiting ...");
});
