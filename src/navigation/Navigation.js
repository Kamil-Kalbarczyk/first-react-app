import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

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
              >Home
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >About me
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Games
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Forms
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
              >Users
              </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};