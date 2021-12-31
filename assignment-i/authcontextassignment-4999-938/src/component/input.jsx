import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function Input() {
  const { handleToggle, isError } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  return (
    <div>
      <div>
        <label>Email: </label>
        <input
          type="text"
          placeholder="someone@email.com"
          value={state.email}
          onChange={(e) => setState({ ...state, email: e.target.value })}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="password"
          placeholder="password"
          value={state.password}
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
      </div>
      <button onClick={() => handleToggle(state)}>Login</button>
      {isError && <h3>Wrong Email or password</h3>}
    </div>
  );
}
