import { AboutMe } from "../AboutMe/AboutMe";
import { Game } from "../games/Game";
import { GameClass } from "../games/GameClass";
import { Users } from "../users/Users";
import { MyForm } from "../forms/MyForm";
import { MyBoostedForm } from "../forms/MyBoostedForm";
import { Hello } from "../common/Hello";
import { Sign } from "../Sign/Sign";
import { Routes, Route } from "react-router-dom";
import { UserDetails } from "../users/UserDetails";

export const Content = () => {
  return (
    <>
      <Routes>
        <Route path="/sign" element={<Sign />} />
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
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </>
  );
};
