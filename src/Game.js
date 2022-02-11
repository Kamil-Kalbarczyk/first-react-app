import { useState, useEffect } from "react";
import styled from "styled-components";

/*
Wykorzystanie styled components z dynamicznym pytaniem o wartość, nie jest takie oczywiste.
Należy posłuzyć się propsem, który będzie reagował na zmianę wartości.
tutaj poslużyliśmy się propsem score, któremu później w JSX przypisujemy wartość z points z useState.
 */
const Score = styled.span`
  color: ${(props) => (props.score > 0 ? "yellowgreen" : "pink")};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10%;
  margin-bottom: 100px;
`;

const Button = styled.button`
  height: 40px;
  width: 120px;
  font-size: 20px;
  color: black;
  border: none;
  border-radius: 4%;
  color: white;
  cursor: pointer;
`;

const AddButton = styled(Button)`
  background-color: green;
`;

const RemoveButton = styled(Button)`
  background-color: red;
`;

export const Game = (props) => {
  const [points, setPoints] = useState(0);

  const addPoints = () => setPoints(points + 5);
  const removePoints = () => setPoints(points - 5);

  useEffect(() => {
    if (points >= 50) {
      alert(`Gratulacje! Wygrałeś w grę ${props.gameName}!`);
      setPoints(0);
    } else if (points < -50) {
      alert(`Przegrałeś w grę ${props.gameName}`);
      setPoints(0);
    }
  });

  return (
    <>
      <h2>Witamy w grze {props.gameName}</h2>
      <h4>
        Troja liczpa punktów to:{" "}
        {/* <span style={{ color: points > 0 ? "green" : "red" }}>{points}</span> */}
        {/* Poniżej przypisanie do propsa score, wartości points ze stanu lokalnego. Powyżej to samo, tylko zapisane w stylach liniowych */}
        <Score score={points}>{points}</Score>
      </h4>
      <h6>Add or remove points</h6>
      <ButtonContainer>
        <AddButton onClick={addPoints}>Add</AddButton>
        <RemoveButton onClick={removePoints}>Remove</RemoveButton>
      </ButtonContainer>
    </>
  );
};
