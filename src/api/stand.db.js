const apiUrl =
  'https://raw.githubusercontent.com/ggonzalesd/store/main/data/products.json';

export const getProducts = async () => {
  try {
    const req = await fetch(apiUrl);
    const products = await req.json();

    return {
      ok: true,
      products,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};
