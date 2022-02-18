import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import { Typography } from "@mui/material";
export const UserDetails = (props) => {
  const [user, getUser] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((data) => getUser(data))
      .catch((error) => console.log(error));
  }, []);
  if (!user) {
    <CircularProgress />;
  } else if (user && !user.name) {
    return (
      <>
        <Typography variant="h4">Witaj nieznajomy</Typography>
      </>
    );
  } else {
    return (
      <>
        <Typography variant="h4">Witaj użytkowniku o id: {user.id}</Typography>
        <Typography variant="h4">Twoje imię to: {user.name}</Typography>
      </>
    );
  }
};
