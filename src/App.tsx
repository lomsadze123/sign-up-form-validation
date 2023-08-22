import styled from "styled-components";
import bgMobile from "./assets/bg-mobile.png";
import bgDesktop from "./assets/bg-desktop.png";
import Article from "./components/article";
import SectionPart from "./components/section";
import Inputs from "./components/inputs";

const App = () => {
  return (
    <Body>
      <Article />
      <div>
        <SectionPart />
        <Inputs />
      </div>
    </Body>
  );
};

export default App;

const Body = styled.main`
  min-height: 100vh;
  background: #ff7979 url(${bgMobile});
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 0 2.4rem;
  & > div {
    width: 100%;
    max-width: 54rem;
  }

  @media (min-width: 1110px) {
    padding: 0;
    background-image: url(${bgDesktop});
    flex-direction: row;
    gap: 4.5rem;
  }
`;
