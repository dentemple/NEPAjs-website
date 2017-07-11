/*
  Allows styled-components to target the 'body' element with CSS:
  https://www.styled-components.com/docs/api#injectglobal
*/

import { injectGlobal } from "styled-components";

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`;
