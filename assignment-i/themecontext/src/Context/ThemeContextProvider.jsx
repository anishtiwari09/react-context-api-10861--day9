const { createContext, useState } = require("react");

// const themeMode = {
//   dark: {
//     backgroundColor: "#000",
//     width: "100%",
//     height: "400px"
//   }
// };
const myTheme = (mode) => {
  const themeMode = {
    mainTheme: {
      backgroundColor: `${mode === "dark" ? "#000" : "#ffffff"}`,
      width: "100%",
      height: "100vh",
      color: `${mode === "dark" ? "#ffffff" : "#000"}`
    },
    inputBox: {
      borderColor: `${mode === "dark" ? "#ffffff" : "#000"}`,
      color: `${mode === "dark" ? "#ffffff" : "#000"}`
    }
  };
  return themeMode;
};

export const ThemeContext = createContext();
export function ThemeContextProvider({ children }) {
  const [state, setState] = useState("light");

  const handleThemeToggle = () => {
    if (state == "dark") setState("light");
    else setState("dark");
  };

  const value = [{ handleThemeToggle, themeMode: myTheme(state), state }];
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
