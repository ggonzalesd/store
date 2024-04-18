import { getProducts } from '../../api/stand.db';
import { setError, setLoading, setProducts } from './stand.slice';

export const startLoadingProducts = () => {
  return async (dispatch) => {
    dispatch(setLoading());

    const data = await getProducts();

    if (data.ok) {
      return dispatch(setProducts(data.products));
    }

    dispatch(setError(data.errorMessage));
  };
};
