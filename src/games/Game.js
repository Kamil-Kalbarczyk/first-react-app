import { useState, useEffect } from "react";
import styled from "styled-components";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Score = styled.span`
  color: ${(props) => (props.score > 0 ? "yellowgreen" : "pink")};
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
      <Stack spacing={2} direction="row">
        <Button /* sx={{backgroundColor: 'green'}} */ color='success' variant="contained" onClick={addPoints}><AddIcon /></Button>
        <Button /* sx={{backgroundColor: 'red'}} */ color='error'  variant="contained" onClick={removePoints}><RemoveIcon /></Button>
      </Stack>
    </>
  );
};
