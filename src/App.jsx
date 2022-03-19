import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyles, lightTheme } from "./theme/theme";
import { useDarkMode } from "./hooks/useDarkMode";
import { useSelector } from "react-redux";
import Days from "./pages/Home/components/Days/Days";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const { isModal } = useSelector(state => state.weather)

  return (<ThemeProvider theme={themeMode}>
    <Popup visible={isModal} />
    <div className="container" >
      <GlobalStyles />
      <Header switchTheme={themeToggler} />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/month-statistics" element={<MonthStatistics />} />
      </Routes>

    </div>
  </ThemeProvider >);
};

export default App;
