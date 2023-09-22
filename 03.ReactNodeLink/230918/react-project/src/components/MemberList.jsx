import axios from "../axios";
import React, { useEffect, useState } from "react";
const MemberList = () => {
  const [list, setList] = useState([]);

  // 화면이 렌더링이 완료됐을 때, 실행될 react Hook
  useEffect(() => {
    axios.post("/user/select").then((res) => {
      console.log(res.data.list);
      setList(res.data.list);
    });
  }, []);

  return (
    <div>
      <h1>회원정보</h1>
      <table className="member-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, idx) => (
            <tr key={item.id + idx}>
              <td>{item.id}</td>
              <td>{item.user_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
