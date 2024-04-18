import { StandLayout } from '../layout/StandLayout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingProducts } from '../../store/stand/thunks';
import { Product } from '../../ui/Product';

export const StandPage = () => {
  const { products } = useSelector((state) => state.stand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingProducts());
  }, []);

  return (
    <StandLayout>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </StandLayout>
  );
};
