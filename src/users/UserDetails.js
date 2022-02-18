import { useParams } from "react-router-dom";

import { Typography } from "@mui/material";
export const UserDetails = (props) => {
  const params = useParams();

  console.log(params);
  return (
    <Typography variant="h2">
      Witaj użytkowniku o id: {params.username}
    </Typography>
  );
};
