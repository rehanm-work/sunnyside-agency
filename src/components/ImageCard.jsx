import { useStyles } from './useStyles';

const ImageCard = ({ imgUrl }) => {
  const classes = useStyles();
  return (
    <>
      <img className={classes.cardImage} src={imgUrl} alt='transform-img' />
    </>
  );
};

export default ImageCard;
