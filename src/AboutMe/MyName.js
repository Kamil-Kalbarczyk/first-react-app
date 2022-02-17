import { Typography } from "@mui/material";

export const MyName = (props) => {
  console.log(props);

  if (props.surname) {
    return (
      <>
        <Typography variant='h3'>Moje imię to {props.name}</Typography>
        <Typography variant='h4'>A moje nazwisko to {props.surname}</Typography>
      </>
    );
  } else {
    return <Typography variant='h3'>Moje imię to {props.name}!</Typography>;
  }
};
