import { Route, Routes } from 'react-router-dom';
import { StandRouter } from '../stand/router/StandRouter';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/*' element={<StandRouter />} />
    </Routes>
  );
};
