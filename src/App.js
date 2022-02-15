import { Wrapper } from "./Wrapper";
import { AboutMe } from "./AboutMe/AboutMe";
import { Game } from "./games/Game";
import {GameClass} from './games/GameClass'
import {Users} from './Users'
import {MyForm} from './MyForm'
import {MyBoostedForm} from './MyBoostedForm'

function App() {
  return (
    <Wrapper>
      <AboutMe />
      <Game gameName="Marioo" />
      <GameClass gameName='Tetrisso'/>
      <Users />
      <MyForm />
      <MyBoostedForm />
    </Wrapper>
  );
}

export default App;
