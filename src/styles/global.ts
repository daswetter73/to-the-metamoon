import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    height: 100%;
  }

  html {
    font-family: Montserrat, Arial, sans-serif;
    font-size: 16px;
  }

  body {
    background-color: white;
  }

  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;

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
