import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {Link, NavLink} from 'react-router-dom'

export const Navigation = () => {
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            My First <br /> React App
          </Typography>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to='/'>Home</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to='/about'>About me</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to='/games'>Games</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to='/forms'>Forms</Link>
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              ><Link to='/users'>Users</Link>
              </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};