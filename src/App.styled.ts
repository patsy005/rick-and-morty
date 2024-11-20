import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const globalStyles = css`
  html {
    font-size: 62.5%;
  }

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  * {
    font-family: "Open Sans", sans-serif;
  }
`;
