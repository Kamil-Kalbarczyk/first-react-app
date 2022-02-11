import { useState } from "react";

export const Game = (props) => {
  const [points, setPoints] = useState(0);

  const addPoints = () => setPoints(points + 1);

  return (
    <>
      <h2>Witamy w grze {props.gameName}</h2>
      <h4>Troja liczpa punktów to: {points}</h4>
      <button onClick={addPoints}>Add 1 point</button>
    </>
  );
};
