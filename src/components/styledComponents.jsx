import { styled } from '@mui/system';

export const NavButton = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '50px',
  color: 'white',
  padding: '13px',
  width: '7rem',
  fontFamily: 'Barlow , sans-serif',
  transition: '0.1s ease',
  [theme.breakpoints.down(380)]: {
    color: 'hsl(210, 4%, 67%)',
    letterSpacing: '2px',
    fontWeight: '700',
  },
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
    fontFamily: 'Fraunces , serif',
    fontWeight: '700',
    textTransform: 'uppercase',
    [theme.breakpoints.down(380)]: {
      color: 'hsl(210, 4%, 67%)',
      fontFamily: 'Barlow , sans-serif',
      textTransform: 'capitalize',
    },
    '&:active': {
      background: '#2FADFC',
      color: 'white',
      [theme.breakpoints.down(380)]: {
        backgroundColor: 'hsl(51, 100%, 49%)',
        fontFamily: 'Fraunces , serif',
        color: 'black',
        textTransform: 'uppercase',
        fontWeight: '900',
      },
    },
  },
}));
