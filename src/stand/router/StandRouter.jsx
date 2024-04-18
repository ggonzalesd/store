import { Navigate, Route, Routes } from 'react-router-dom';
import { StandPage } from '../pages/StandPage';

export const StandRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<StandPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
};
