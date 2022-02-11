import { useState } from "react";
import styled from "styled-components";

const Score = styled.span`
  color: ${(props) => (props.points > 0 ? "yellowgreen" : "pink")};
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

  return (
    <>
      <h2>Witamy w grze {props.gameName}</h2>
      <h4>
        Troja liczpa punktów to:{" "}
        {/* <span style={{ color: points > 0 ? "green" : "red" }}>{points}</span> */}
        <Score points={points}>{points}</Score>
      </h4>
      <h6>Add or remove points</h6>
      <ButtonContainer>
        <AddButton onClick={addPoints}>Add</AddButton>
        <RemoveButton onClick={removePoints}>Remove</RemoveButton>
      </ButtonContainer>
    </>
  );
};
