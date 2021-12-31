import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import Input from "./input";

export default function Navbar() {
  const { token, isAuth, handleToggle } = useContext(AuthContext);
  console.log(token);
  return isAuth ? (
    <div>
      <h3>Token is: {token}</h3>,
      <div>
        <button onClick={handleToggle}>Logout</button>
      </div>
    </div>
  ) : (
    <Input />
  );
}
