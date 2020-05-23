import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: all 0.50s linear;
    font-weight: 400;
    font-size:  ${({ theme }) => theme.textSize};
    line-height:  ${({ theme }) => theme.lineHeight};
    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden;
    div {
      padding: 0;
      margin:0;
    }
  }
  
  `;
