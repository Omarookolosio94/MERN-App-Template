import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.50s linear;
    font-weight: 400;
    box-sizing: border-box;
    position: relative;
    margin: 0;

    div {
      padding: 0;
      margin:0;
    }
  }
  
  `;
