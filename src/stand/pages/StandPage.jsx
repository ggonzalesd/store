import { StandLayout } from '../layout/StandLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingProducts } from '../../store/stand/thunks';
import { Product } from '../../ui/Product';
import { Grid } from '@mui/material';

export const StandPage = () => {
  const { products } = useSelector((state) => state.stand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);

  return (
    <StandLayout>
      <Grid container spacing={2} sx={{ padding: 1 }}>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Grid>
    </StandLayout>
  );
};
