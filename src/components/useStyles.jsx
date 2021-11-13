import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  header: {
    overflow: 'hidden',
    height: '785px',
    [theme.breakpoints.down(380)]: {
      height: '100vh',
    },
  },
  headerImg: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
  },
  headerText: {
    fontFamily: 'Fraunces , serif',
    position: 'absolute',
    top: '20%',
    marginLeft: '25%',
    marginRight: '25%',
    width: '53%',
    textAlign: 'center',
    letterSpacing: '4px',
    color: 'white',
    fontWeight: '700',
    '& > img': {
      marginTop: '9rem',
      maxWidth: '100vw',
    },
    [theme.breakpoints.down(380)]: {
      width: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      '& > img': {
        marginTop: '1rem',
      },
    },
  },
  cardGrid: {
    display: 'grid',
    maxWidth: '100vw',
    height: '479px',
    gridTemplateColumns: '1fr 1fr',
    overflow: 'hidden',
    [theme.breakpoints.down(380)]: {
      display: 'flex',
      flexDirection: 'column',
      height: 'auto',
    },
  },
  cardImage: {
    width: '100%',
    height: '80%',
    [theme.breakpoints.down(380)]: {
      height: '23rem',
    },
  },
}));
