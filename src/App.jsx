import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./hooks/useDarkMode";
import { GlobalStyles } from "./Themes/GlobalStyles";
import { darkTheme, lightTheme } from "./Themes/Theme";
import Header from "./components/Header/Header";
import styled from "styled-components";
import "./style/reset.css";
import "./style/index.css";
import Today from "./components/Today/Today";
import Сharacteristics from "./components/Сharacteristics/Сharacteristics";
import WeatherOnFuture from "./components/WeatherOnFuture/WeatherOnFuture";

const ContainerStyle = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const WeatherTodayGroupStyle = styled.div`
  display: flex;
  margin: 40px 0;
`;

const Future = styled.div``;

const App = () => {
  const { theme, themeToggler } = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ContainerStyle>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header themeToggler={themeToggler} />
        <WeatherTodayGroupStyle>
          <Today />
          <Сharacteristics />
        </WeatherTodayGroupStyle>
        <Future>
          <WeatherOnFuture />
        </Future>
      </ThemeProvider>
    </ContainerStyle>
  );
};

export default App;
