import { createGlobalStyle } from 'styled-components/macro';
import styledSanitize from 'styled-sanitize';

const GlobalStyle = createGlobalStyle`

/* CSS Reset */
${styledSanitize}

/* Global Styles  */

body,
ol,
ul {
  font-weight: normal;
  font-family: "Open Sans", "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: #363636;
}


img, svg {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

table {
  border-collapse: collapse;
  text-align: left;
  width: 100%;
}



form {
  width: 100%;
}
`;

export default GlobalStyle;
