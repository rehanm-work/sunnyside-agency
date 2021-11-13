import { useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';

const MultiImages = () => {
  const matches = useMediaQuery('(min-width:380px)');
  return (
    <Box
      sx={
        matches
          ? {
              display: 'flex',
              '&>img': {
                width: 'calc(100%/4)',
              },
            }
          : {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              '&>img': {
                width: '100%',
              },
            }
      }
    >
      <img
        src='/images/desktop/image-gallery-milkbottles.jpg'
        alt='milkbottles-img'
      />
      <img src='/images/desktop/image-gallery-orange.jpg' alt='orange-img' />
      <img src='/images/desktop/image-gallery-cone.jpg' alt='cone.img' />
      <img
        src='/images/desktop/image-gallery-sugarcubes.jpg'
        alt='sugarcubes.img'
      />
    </Box>
  );
};

export default MultiImages;
