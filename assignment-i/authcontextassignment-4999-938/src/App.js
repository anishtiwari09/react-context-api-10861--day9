import Navbar from "./component/navbar";
import { AuthContextProvider } from "./context/AuthContextProvider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <h1>Auth Contex Api</h1>
        <Navbar />
      </AuthContextProvider>
    </div>
  );
}
