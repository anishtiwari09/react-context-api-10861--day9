import { useContext } from "react";
import Form from "./component/Form";
import Navbar from "./component/Navbar";
import { ThemeContext } from "./Context/ThemeContextProvider";
import "./styles.css";

export default function App() {
  const [{ themeMode }] = useContext(ThemeContext);
  return (
    <div className="App" style={themeMode.mainTheme}>
      <h1>Theme Context</h1>
      <Navbar />
      <Form />
    </div>
  );
}
