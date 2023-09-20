import axios from "axios";

const instance = axios.create({
  // 개발용
  baseURL: "http://localhost:3001",
});

export default instance;
