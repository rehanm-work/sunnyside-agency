import {
  AppBar,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { Box } from '@mui/system';
import { NavButton } from './styledComponents';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  const matches = useMediaQuery('(min-width:380px)');
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      <AppBar
        position='absolute'
        elevation={0}
        sx={{ background: 'transparent', maxWidth: '100vw' }}
      >
        <Toolbar>
          <Typography
            sx={{
              fontFamily: 'Fraunces , serif',
              fontSize: '2rem',
              fontWeight: '900',
            }}
          >
            sunnyside
          </Typography>
          {matches ? (
            <Box sx={{ display: 'flex', ml: 'auto', columnGap: '1rem' }}>
              <NavButton>About</NavButton>
              <NavButton>Services</NavButton>
              <NavButton>Projects</NavButton>
              <NavButton>Contact</NavButton>
            </Box>
          ) : (
            <Box sx={{ ml: 'auto' }}>
              <IconButton sx={{ color: 'white' }} onClick={handleClick}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {!matches && (
        <Paper
          sx={{
            width: 320,
            maxWidth: '100%',
            position: 'absolute',
            borderRadius: '5px',
            top: '4rem',
            left: '1.3rem',
            zIndex: '5',
            WebkitClipPath:
              'polygon(100% 0, 100% 9%, 100% 100%, 0 100%, 0 9%, 92% 9%)',
            clipPath:
              'polygon(100% 0, 100% 9%, 100% 100%, 0 100%, 0 9%, 92% 9%)',
            transform: !isOpen ? 'scale(0)' : 'scale(1)',
            transformOrigin: '310px -32px',
            transition: 'transform ease-out 300ms',
          }}
        >
          <MenuList>
            <MenuItem
              disableRipple
              sx={{ justifyContent: 'center', marginTop: '2rem' }}
            >
              <NavButton>About</NavButton>
            </MenuItem>
            <MenuItem
              disableRipple
              sx={{ justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <NavButton>Services</NavButton>
            </MenuItem>
            <MenuItem
              disableRipple
              sx={{ justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <NavButton>Projects</NavButton>
            </MenuItem>
            <MenuItem
              disableRipple
              sx={{ justifyContent: 'center', marginTop: '1rem' }}
            >
              <NavButton>Contact</NavButton>
            </MenuItem>
          </MenuList>
        </Paper>
      )}
    </>
  );
};

export default Navbar;
