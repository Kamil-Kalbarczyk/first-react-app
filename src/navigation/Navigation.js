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

/* 
Dzięki użyciu NavLink zamiast Link, mamy możliwość użycia w stylach propsa isActive.
isActive działa następująco:
Jeżeli dany link z NavLink jest aktywny, to isActive jest true.
W innym przypadku jest false.
*/

const activeButton = {
  backgroundColor: "red",
};

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
            component={NavLink}
            to="/"
            style={({ isActive }) => (isActive ? activeButton : undefined)}
          >
            Home
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            component={NavLink}
            to="/about"
            style={({ isActive }) => (isActive ? activeButton : undefined)}
          >
            About me
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            component={NavLink}
            to="/games"
            style={({ isActive }) => (isActive ? activeButton : undefined)}
          >
            Games
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            component={NavLink}
            to="/forms"
            style={({ isActive }) => (isActive ? activeButton : undefined)}
          >
            Forms
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            component={NavLink}
            to="/users"
            style={({ isActive }) => (isActive ? activeButton : undefined)}
          >
            Users
          </Button>
          <Button
            sx={{ my: 2, color: "white", display: "block" }}
            component={NavLink}
            to="/sign"
            style={({ isActive }) => (isActive ? activeButton : undefined)}
          >
            Sign
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
