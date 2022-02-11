import { Wrapper } from "./Wrapper";
import { AboutMe } from "./AboutMe/AboutMe";
import { Game } from "./Game";

function App() {
  return (
    <Wrapper>
      <AboutMe />
      <Game gameName="Marioo" />
    </Wrapper>
  );
}

export default App;
