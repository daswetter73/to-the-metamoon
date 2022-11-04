import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  html {
    font-family: Montserrat, Arial, sans-serif;
    font-size: 24px;
    color: white;
    height: 100%;
  }

  body {
    background-color: black;
    min-height: 100%;
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;

    main {
      flex: 1 0 auto;
    }

    footer {
      flex: 0 0 auto;
    }
  }

  a {
    color: inherit;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
  input[type='number']:hover,
  input[type='number']:focus {
    -moz-appearance: number-input;
  }
`;

export { GlobalStyle };
