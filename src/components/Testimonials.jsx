import { Stack, Typography } from '@mui/material';
import TestimonialCard from './TestimonialCard';
import { testimonialData } from '../data';
import { Box } from '@mui/system';

const Testimonials = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '80px 40px 10px',
        '@media screen and (max-width: 380px)': {
          padding: '80px 0 10px',
        },
      }}
    >
      <Typography
        variant='h5'
        sx={{
          textTransform: 'uppercase',
          letterSpacing: '3px',
          fontWeight: 900,
          fontFamily: 'Fraunces , serif',
          color: 'hsl(232, 10%, 55%)',
          '@media screen and (max-width: 380px)': {
            fontSize: '1rem',
          },
        }}
      >
        Client testimonials
      </Typography>
      <Stack
        direction='row'
        justifyContent='space-evenly'
        alignItems='center'
        spacing={2}
        sx={{
          padding: '0 5rem 5rem',
          '@media screen and (max-width: 380px)': {
            flexDirection: 'column',
            padding: '0',
          },
        }}
      >
        {testimonialData.map((person, index) => (
          <TestimonialCard key={index} {...person} />
        ))}
      </Stack>
    </Box>
  );
};

export default Testimonials;
