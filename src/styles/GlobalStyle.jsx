import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
html, body {
    width:100%;
    height:100%;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration:none;
    color: #767676;
  }

  button{
    border: none;
    background: inherit;
    outline: none;
  }
`;

export default GlobalStyle;
