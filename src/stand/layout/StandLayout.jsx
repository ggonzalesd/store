import PropTypes from 'prop-types';
import { NavBar } from '../components/NavBar';

export const StandLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

StandLayout.propTypes = {
  children: PropTypes.any,
};
