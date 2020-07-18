import React, { useState, useContext } from "react";

const AuthContext = React.createContext(null);

const AuthProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const attemptLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      // fetch("/api/login", {
      //   method: "post",
      //   headers: {
      //     Accept: "application/json",
      //     "Content-Type": "application/json",
      //   },
      //   //make sure to serialize your JSON body
      //   body: JSON.stringify({
      //     username,
      //     password,
      //   }),
      // })
      Promise.resolve()
        .then(() => {
          setIsLoggedIn(true);
          setUser(username);
          // setUser(body[0]);
          resolve();
        })
        .catch(reject);
      // .then(async (response) => {
      //   if (response.status === 200) {
      //     // const body = await response.json();
      //     setIsLoggedIn(true);
      //     setUser(username);
      //     // setUser(body[0]);
      //     resolve();
      //   } else {
      //     reject();
      //   }
      // })
      // .catch(reject);
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const contextValue = {
    isLoggedIn,
    user,
    attemptLogin,
    logout,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export default useAuth;
export { AuthProvider };
