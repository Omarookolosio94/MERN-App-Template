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

    .fal {
        color: ${({ theme }) => theme.text};
    }

    button {
        border: 1px solid;
        border-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.text};
        text-transform: capitalize;
    }
  }
  `;
