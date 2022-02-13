import { Wrapper } from "./Wrapper";
import { AboutMe } from "./AboutMe/AboutMe";
import { Game } from "./Game";
import {Users} from './Users'

function App() {
  return (
    <Wrapper>
      <AboutMe />
      <Game gameName="Marioo" />
      <Users />
    </Wrapper>
  );
}

export default App;
