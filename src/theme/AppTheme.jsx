import PropTypes from 'prop-types';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { mainTheme } from './main.theme';

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

AppTheme.propTypes = {
  children: PropTypes.element.isRequired,
};
