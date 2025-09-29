import { Link } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import '../assets/font.css';

const pages = ['About','Education', 'Projects', 'Hobbies'];
const pagelink = ['', 'education', 'project', 'hobby'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [activePage, setactivePage] = React.useState('About');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
    setactivePage(event.target.textContent);
  };

  const handlePageChange = (event) => {
    setactivePage('About');
  };


  return (
    <AppBar position="static" sx={{bgcolor:'#222',height:'60px', justifyContent:'center'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page,index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                   <Typography sx={{ textAlign: 'center', fontFamily:'Karla'}}>
                    <Link to={`/${pagelink[index]}`} style={{ textDecoration: 'none', color:'inherit'}}>{page}</Link>
                   </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Megrim',
              fontWeight: 800,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to="/" onClick={handlePageChange}
            style={{ textDecoration: 'none', color:'inherit'}}>Saumya Singh</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block', bgcolor:'#222', textTransform:'none', my:'5px', borderRadius:'5px'}}
              >
                <Typography sx={{ textAlign: 'center', fontFamily:'Karla'}}>
                  <Link to={`/${pagelink[index]}`} style={{ textDecoration: 'none', color:'inherit'}}>{page}</Link>
                </Typography>
              </Button>
            ))}
          </Box>
          {activePage!=='About'
          && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open About Me">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Saumya Singh" src="./dp.jpeg" />
              </IconButton>
            </Tooltip>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
