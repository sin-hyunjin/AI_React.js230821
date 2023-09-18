// require, import ..
const express = require("express");
const app = express();
const indexRouter = require("./routes");
// router
app.use("/", indexRouter);

// Q. 3000번을 안쓰는 이유는? A. 나중에 React에서 쓸거임
app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log("port waiting ...");
});
