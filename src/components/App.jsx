import React from "react";

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './elements/useDarkMode';
import { lightTheme, darkTheme } from './elements/theme';
import Header from "./elements/Header";
import Home from "./Home";
import { GlobalStyle } from "./styles/GlobalStyle";
import Toggle from "./elements/Toggle"


const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />
  };
  return (
    <ThemeProvider theme={themeMode}>
    <>
      <Header/>
      <Home/>
      <GlobalStyle/>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </>
    </ThemeProvider>
  );
};




export default App;
