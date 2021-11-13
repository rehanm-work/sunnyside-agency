import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';

const CardButton = styled((props) => {
  const { bgColor, ...other } = props;
  return <p {...other} />;
})(({ theme, bgColor }) => ({
  fontFamily: 'Fraunces , serif',
  textTransform: 'uppercase',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  letterSpacing: '2px',
  position: 'relative',
  zIndex: '4',
  '&:after': {
    bottom: '-2px',
    left: '-10px',
    width: '165px',
    height: '10px',
    content: "''",
    display: 'block',
    zIndex: '-1',
    position: 'absolute',
    background: bgColor,
    WebkitFilter: 'blur(3px)',
    [theme.breakpoints.down(380)]: {
      left: '73px',
    },
  },
}));

// const useStyles = makeStyles({
//   card: {
//     width: '50vw',
//     margin: '20% 10%',
//   },
// });

const InfoCard = ({ title, text, bgColor }) => {
  return (
    <Box
      sx={{
        maxWidth: '430px',
        margin: '100px auto',
        '@media screen and (max-width: 380px)': {
          margin: 'auto',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItem: 'center',
          textAlign: 'center',
          '& > h3': {
            fontSize: '2rem',
          },
        },
      }}
    >
      <Typography sx={{ fontFamily: 'Fraunces , serif', mb: 4 }} variant='h3'>
        {title}
      </Typography>
      <Typography
        sx={{ fontFamily: 'Barlow, sans-serif', mb: 4 }}
        color='textSecondary'
      >
        {text}
      </Typography>
      <CardButton bgColor={bgColor}>Learn More</CardButton>
    </Box>
  );
};

export default InfoCard;
