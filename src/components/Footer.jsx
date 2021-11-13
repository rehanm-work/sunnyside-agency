import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <Box
      sx={{
        padding: '5.5rem 0 3rem',
        backgroundColor: '#7AEAD3',
        color: '#2C7566',
        fontFamily: 'Barlow, sans-serif',
        fontWeight: 900,
      }}
    >
      <Stack
        direction='column'
        justifyContent='space-evenly'
        alignItems='center'
        spacing={2}
      >
        <Typography variant='h3'>sunnyside</Typography>
        <Stack
          sx={{ paddingTop: '0.5rem' }}
          direction='row'
          justifyContent='space-evenly'
          alignItems='center'
          spacing={2}
        >
          <Button
            disableRipple
            sx={{
              color: '#2C7566',
              backgroundColor: 'transparent',
              '&:hover': { color: 'hsl(0, 0%, 100%)' },
            }}
          >
            About
          </Button>
          <Button
            disableRipple
            sx={{
              color: '#2C7566',
              backgroundColor: 'transparent',
              '&:hover': { color: 'hsl(0, 0%, 100%)' },
            }}
          >
            Services
          </Button>
          <Button
            disableRipple
            sx={{
              color: '#2C7566',
              backgroundColor: 'transparent',
              '&:hover': { color: 'hsl(0, 0%, 100%)' },
            }}
          >
            Projects
          </Button>
        </Stack>
        <Stack
          sx={{ paddingTop: '1.5rem' }}
          direction='row'
          justifyContent='space-evenly'
          alignItems='center'
          spacing={2}
        >
          <FacebookIcon sx={{ width: '30px', height: '30px' }} />
          <InstagramIcon sx={{ width: '30px', height: '30px' }} />
          <TwitterIcon sx={{ width: '30px', height: '30px' }} />
          <PinterestIcon sx={{ width: '30px', height: '30px' }} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
