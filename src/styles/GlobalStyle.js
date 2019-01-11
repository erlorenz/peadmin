import { createGlobalStyle } from 'styled-components/macro';
import styledSanitize from 'styled-sanitize';

const GlobalStyle = createGlobalStyle`

/* CSS Reset */
${styledSanitize}

/* Global Styles  */

body,
ol,
ul
{
  font-weight: normal;
  font-family: "Open Sans", "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${props => props.theme.textColor};
}

button,
input, 
select, 
textarea {
  line-height: 1.5;
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

thead {
  border-bottom: 1px solid lightgray;
}

input, 
textarea, 
select,
button,
label
 {
  border-radius: 4px;
}

form {
  width: 100%;
}
`;

export default GlobalStyle;
