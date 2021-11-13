import { Avatar, Card, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';

const TestimonialCard = ({ imgUrl, text, name, job }) => {
  return (
    <Card sx={{ maxWidth: 345, px: 5 }} elevation={0}>
      <Stack
        direction='column'
        justifyContent='space-evenly'
        alignItems='center'
        spacing={2}
        sx={{ minHeight: '400px' }}
      >
        <Avatar sx={{ width: 56, height: 56 }} alt='Remy Sharp' src={imgUrl} />
        <Typography sx={{ color: 'hsl(213, 9%, 39%)' }}>{text}</Typography>
        <Box>
          <Typography
            variant='h6'
            sx={{ fontWeight: 900, fontFamily: 'Fraunces , serif' }}
          >
            {name}
          </Typography>
          <Typography sx={{ color: 'hsl(210, 4%, 67%)' }}>{job}</Typography>
        </Box>
      </Stack>
    </Card>
  );
};

export default TestimonialCard;
