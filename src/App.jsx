import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: #141414;
    font-family: "Inter", sans-serif;
    font-display: swap;
    font-size: 1rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
    </>
  );
};

export default App;
