import React from "react";

const Main = () => {
  // sesssionStorage 값 가져오기

  const userObj = JSON.parse(sessionStorage.getItem("user"));
  // console.log("userObj :", userObj.user_name);
  return (
    <div>
      {userObj == null ? (
        <h3>로그인 후 이용가능합니다.</h3>
      ) : (
        <h3>{userObj.user_name} 님환영합니다</h3>
      )}
    </div>
  );
};

export default Main;
