import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MonthStatistics from "./pages/MonthStatistics/MonthStatistics";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./theme/theme";
import { useDarkMode } from "./hooks/useDarkMode";
import { useDispatch, useSelector } from "react-redux";
import { useGetCoordQuery } from "./API/weather.api";
import { weatherSliceActions } from "./store/slices/weatherSlice";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);
  // <button onClick={() => setModal(true)}>Клик-клик-клик</button>

  return (
    <ThemeProvider theme={themeMode}>
      <Popup
        visible={isModal}
        title="Заголовок"
        content={<p>Что-то важное</p>}
        footer={<button onClick={onClose}>Закрыть</button>}
        onClose={onClose}
      />
      <div className="container" onClick={() => {}}>
        <GlobalStyles />
        <Header switchTheme={themeToggler} />
        <Routes>
          <Route path="*" element={<Home setModal={setModal} />} />
          <Route path="/month-statistics" element={<MonthStatistics />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
