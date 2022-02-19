import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyles } from "./Themes/GlobalStyles";
import { darkTheme, lightTheme } from "./Themes/Theme";
import ThemeTogler from "./Themes/ThemeTogler";

function App() {
  const { theme, themeToggler } = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <ThemeTogler themeToggler={themeToggler} />
      </ThemeProvider>
    </div>
  );
}

export default App;
