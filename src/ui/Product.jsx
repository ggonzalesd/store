import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { productImageLink } from '../helpers/productImageLink';
import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  LocalGroceryStoreOutlined,
  WhatsApp,
} from '@mui/icons-material';

export const Product = ({ product: { nombre, precio, marca, fotos } }) => {
  const [iImg, setIImg] = useState(0);

  const nextImage = () => {
    if (iImg + 1 < fotos.length) {
      setIImg(iImg + 1);
    } else {
      setIImg(0);
    }
  };
  const prevImage = () => {
    if (iImg > 0) {
      setIImg(iImg - 1);
    } else {
      setIImg(fotos.length - 1);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ bgcolor: '#efefef' }}>
        <CardHeader title={nombre} subheader={marca} />
        <Box position='relative'>
          <CardMedia
            component='img'
            height={256}
            image={productImageLink(fotos[iImg])}
            alt={nombre}
          />
          <Box
            position='absolute'
            sx={{
              width: '100%',
              top: 0,
              left: 0,
              display: fotos.length >= 2 ? 'flex' : 'none',
              justifyContent: 'space-between',
            }}
          >
            <Button variant='contained' color='primary' onClick={prevImage}>
              <ArrowLeft />
            </Button>
            <Typography
              sx={{
                bgcolor: '#fff4',
                borderRadius: 4,
                padding: 1,
              }}
            >
              {iImg + 1} / {fotos.length}
            </Typography>
            <Button variant='contained' color='primary' onClick={nextImage}>
              <ArrowRight />
            </Button>
          </Box>
        </Box>
        <CardContent>
          <Typography>S/. {precio}</Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <LocalGroceryStoreOutlined />
          </IconButton>
          <IconButton>
            <WhatsApp />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
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
