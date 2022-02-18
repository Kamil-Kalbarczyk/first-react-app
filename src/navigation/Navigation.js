import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";

/* Zwróć uwagę na przyciski w nawigacji.
Użyliśmy propsa component od Material UI.
Props component użyty w poniższy sposób:
<Button component={Link} to='/'>AAA</Button>
oznacza:
-wyglądaj jak Button,
-działaj jak Link 
 */

export const Navigation = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            My First <br /> React App
          </Typography>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            component={Link}
            to="/"
          >
            Home
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            component={Link}
            to="/about"
          >
            About me
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            component={Link}
            to="/games"
          >
            Games
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            component={Link}
            to="/forms"
          >
            Forms
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            component={Link}
            to="/users"
          >
            Users
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
