import { getAuth, signOut } from "firebase/auth";

import { firebaseApp } from "apis/Firebase";

const Logout = () => {
  const auth = getAuth(firebaseApp);
  signOut(auth).then(() => {
    localStorage.clear();
  });
};

export default Logout;
