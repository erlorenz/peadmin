import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-family: "Open Sans", "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: rgb(85, 85, 85);
}

ol,
ul {
  list-style: none;
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


fieldset {
  border: none;
  width: 100%;
  padding: 0;
}

form {
  width: 100%;
}
`;

export default GlobalStyle;