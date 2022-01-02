import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContextProvider";
import styles from "./basic.module.css";
export default function Navbar() {
  const [{ handleThemeToggle, themeMode, state }] = useContext(ThemeContext);
  return (
    <div className={styles.navbar}>
      <div>Home</div>
      <div>Dashboard</div>
      <div>Login</div>

      <div>
        <button onClick={handleThemeToggle}>
          {state == "light" ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}
