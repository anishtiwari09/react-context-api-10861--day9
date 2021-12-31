import axios from "axios";

const { createContext, useState, useEffect } = require("react");

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isError, setIsError] = useState(false);
  const [token, setToken] = useState(null);
  const postRequest = ({ email, password }) => {
    console.log(email, password);
    const data = {
      email,
      password
    };
    const config = {
      url: "https://reqres.in/api/login",
      method: "POST",
      data: data
    };
    return axios(config);
  };

  // useEffect(() => {
  //   postRequest()
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);
  const handleToggle = ({ email, password }) => {
    if (!isAuth) handleSign({ email, password });
    else handleSignOut();
    return;
  };
  const handleSign = ({ email, password }) => {
    // setIsAuth(true);
    // setToken("acdef");
    postRequest({ email, password })
      .then((res) => {
        setToken(res.data.token);
        setIsAuth(true);
        setIsError(false);
      })
      .catch((err) => setIsError(true));
    return;
  };
  const handleSignOut = () => {
    setIsAuth(false);

    return;
  };
  const value = { isAuth, handleToggle, token, isError };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
