import InfoCard from './InfoCard';
import ImageCard from './ImageCard';
import { useStyles } from './useStyles';
import { useMediaQuery } from '@mui/material';

const CardGrid = ({ imageLeft, imgUrl, ...data }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:380px)');
  return (
    <div className={classes.cardGrid}>
      {imageLeft && matches ? (
        <>
          <ImageCard imgUrl={imgUrl} />
          <InfoCard {...data} />
        </>
      ) : (
        <>
          <InfoCard {...data} />
          <ImageCard imgUrl={imgUrl} />
        </>
      )}
    </div>
  );
};

export default CardGrid;
