import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Sign = () => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <>
      <h1>Tu będzie logowanie</h1>
      <Form component="form" onSubmit={handleSubmit}>
        <TextField id="email" type="email" label="Email" />
        <TextField id="password" type="password" label="Password" />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Form>
    </>
  );
};
