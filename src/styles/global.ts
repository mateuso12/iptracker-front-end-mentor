import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Rubik', sans-serif;
  }

  :root {
    --dark-gray: hsl(0, 0%, 59%);
    --very-dark-gray: hsl(0, 0%, 17%);
  }
`;

export default GlobalStyles;
