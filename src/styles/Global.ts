import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
    font-style: normal;
  }

  html {
    font-size: 62.5%;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button, input, select, textarea, hr {
    outline: none;
    border: none;
  }

  a, button {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  .app {
    width: 100vw;
    min-height: 100vh;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    font-size: 1.6rem;
    background-image: url("/main-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .app--title {
    font-size: 3.2rem;
    font-weight: 700;
    color: orange;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px orange;
  }
`;
