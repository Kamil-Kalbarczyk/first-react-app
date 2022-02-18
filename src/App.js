import { Wrapper } from "./common/Wrapper";
import { AboutMe } from "./AboutMe/AboutMe";
import { Game } from "./games/Game";
import { GameClass } from "./games/GameClass";
import { Users } from "./users/Users";
import { MyForm } from "./forms/MyForm";
import { MyBoostedForm } from "./forms/MyBoostedForm";
import { Navigation } from "./navigation/Navigation";
import { Hello } from "./common/Hello";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/about" element={<AboutMe />} />
        <Route
          path="/games"
          element={
            <>
              <Game gameName="Marioo" />
              <GameClass gameName="Tetrisso" />
            </>
          }
        />
        <Route path="/users" element={<Users />} />
        <Route
          path="/forms"
          element={
            <>
              <MyForm />
              <MyBoostedForm />
            </>
          }
        />
      </Routes>
    </Wrapper>
  );
}

export default App;
