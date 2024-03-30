import styled, { createGlobalStyle } from "styled-components";

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

const MainStylized = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainStylized />
    </>
  );
};

export default App;
