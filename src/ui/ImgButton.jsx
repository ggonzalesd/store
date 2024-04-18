import { Button, Icon, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const ImgButton = ({ color, icon, text = null }) => {
  return (
    <Button
      variant='contained'
      startIcon={
        icon && text ? (
          <Icon
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
            }}
          >
            {icon}
          </Icon>
        ) : null
      }
      sx={{
        bgcolor: color,
      }}
    >
      {icon ? (
        <Icon
          sx={{
            display: text ? { xs: 'flex', sm: 'none' } : 'flex',
            alignItems: 'center',
          }}
        >
          {icon}
        </Icon>
      ) : null}
      {text ? (
        <Typography
          variant='button'
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          {text}
        </Typography>
      ) : null}
    </Button>
  );
};

ImgButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string,
};
