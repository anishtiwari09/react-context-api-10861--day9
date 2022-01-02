import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";
import styles from "./basic.module.css";

export default function Form() {
  const [{ themeMode }] = useContext(ThemeContext);
  return (
    <form className={styles.form}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          placeholder="johnSimth09"
          style={themeMode.inputBox}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          placeholder="password"
          style={themeMode.inputBox}
        />
      </div>
    </form>
  );
}
