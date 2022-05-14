import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Login from "utils/Login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>로그인 - 나눔코리아 어드민</title>
        </Helmet>
      </HelmetProvider>

      <div>LoginPage</div>
      <input placeholder="이메일" onChange={onChangeEmail} />
      <input placeholder="비밀번호" onChange={onChangePassword} />
      <button
        onClick={() => {
          Login(email, password);
        }}
      >
        로그인
      </button>
    </>
  );
};

export default LoginPage;
