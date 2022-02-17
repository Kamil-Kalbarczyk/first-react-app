import { Wrapper } from "./Wrapper";
import { AboutMe } from "./AboutMe/AboutMe";
import { Game } from "./games/Game";
import {GameClass} from './games/GameClass'
import {Users} from './Users'
import {MyForm} from './MyForm'
import {MyBoostedForm} from './MyBoostedForm'
import {Navigation} from './navigation/Navigation'

function App() {
  return (
    <Wrapper>
      <Navigation />
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
