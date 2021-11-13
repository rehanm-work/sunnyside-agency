import { Typography } from '@mui/material';
import Navbar from './Navbar';
import { useStyles } from './useStyles';

const Header = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Navbar />
      <div className={classes.header}>
        <img
          className={classes.headerImg}
          src='./images/desktop/image-header.jpg'
          alt='header-img'
        />
        <div className={classes.headerText}>
          <Typography variant='h3'>WE ARE CREATIVES</Typography>
          <img
            onClick={handleClick}
            src='./images/icon-arrow-down.svg'
            alt='header-img'
          />
        </div>
      </div>
    </>
  );
};

export default Header;
