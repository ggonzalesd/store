import { configureStore } from '@reduxjs/toolkit';
import { standSlice } from './stand/stand.slice';

export const store = configureStore({
  reducer: {
    stand: standSlice.reducer,
  },
});
