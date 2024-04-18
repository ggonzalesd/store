import { Box, List, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { productImageLink } from '../helpers/productImageLink';

export const Product = ({ product: { nombre, precio, marca, fotos } }) => {
  return (
    <Box>
      <Typography>{nombre}</Typography>
      <Typography>{marca}</Typography>
      <Typography>{precio}</Typography>
      <List>
        {fotos.map((url) => (
          <img key={url} src={productImageLink(url)} />
        ))}
      </List>
    </Box>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
    marca: PropTypes.string.isRequired,
    fotos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
