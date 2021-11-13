import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const NextCards = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        maxWidth: '100vw',
        height: '550px',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        '@media screen and (max-width: 380px)': {
          gridTemplateColumns: '1fr',
          height: 'auto',
          '& img': {
            height: '30rem',
          },
        },
      }}
    >
      <div style={{ position: 'relative', color: 'hsl(167, 40%, 24%)' }}>
        <img
          style={{ width: '100%', position: 'relative' }}
          src='/images/desktop/image-graphic-design.jpg'
          alt=''
        />
        <Box
          sx={{
            position: 'absolute',
            textAlign: 'center',
            maxWidth: '385px',
            bottom: '140px',
            marginLeft: '145px',
            '@media screen and (max-width: 380px)': {
              bottom: '30px',
              marginLeft: 'auto',
              padding: '0 2px',
            },
          }}
        >
          <Typography
            variant='h5'
            sx={{ mb: 2, fontWeight: 900, fontFamily: 'Fraunces , serif' }}
          >
            Graphic Design
          </Typography>
          <Typography sx={{ fontFamily: 'Barlow, sans-serif' }}>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </Typography>
        </Box>
      </div>
      <Box
        sx={{
          position: 'relative',
          color: 'hsl(198, 62%, 26%)',
          '@media screen and (max-width: 380px)': {
            '& > img': {
              top: '-4px',
            },
          },
        }}
      >
        <img
          style={{ width: '100%', position: 'relative' }}
          src='/images/desktop/image-photography.jpg'
          alt=''
        />
        <Box
          sx={{
            position: 'absolute',
            textAlign: 'center',
            maxWidth: '385px',
            bottom: '140px',
            marginLeft: '155px',
            '@media screen and (max-width: 380px)': {
              bottom: '45px',
              marginLeft: 'auto',
              padding: '0 1rem',
            },
          }}
        >
          <Typography
            variant='h5'
            sx={{ mb: 2, fontWeight: 900, fontFamily: 'Fraunces , serif' }}
          >
            Photography
          </Typography>
          <Typography sx={{ fontFamily: 'Barlow, sans-serif' }}>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NextCards;
