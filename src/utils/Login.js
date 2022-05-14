import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { firebaseApp } from "apis/Firebase";

const Login = (email, password) => {
  const auth = getAuth(firebaseApp);
  signInWithEmailAndPassword(auth, email, password).catch(() => {
    alert("로그인이 실패하였습니다.");
  });
};

export default Login;
