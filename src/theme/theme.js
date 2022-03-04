import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#0D1117",
  textColor: "#fff",
  components: "#4F4F4F",
  days: "#2E3035",
};

export const lightTheme = {
  body: "#FFFFFF",
  textColor: "#000",
  components: "#FFFFFF",
  days: "#DAE9FF",
};

export const GlobalStyles = createGlobalStyle`
   body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: 0.3s all;
   }
   
  `;
