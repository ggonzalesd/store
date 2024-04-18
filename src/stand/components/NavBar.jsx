import { LocalGroceryStore, Menu, WhatsApp } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { ImgButton } from '../../ui/ImgButton';
import { useTheme } from '@emotion/react';

export const NavBar = () => {
  const theme = useTheme();
  const toolbarHeight = theme.mixins.toolbar.minHeight;

  return (
    <>
      <AppBar>
        <Toolbar sx={{ flexDirection: 'row' }}>
          <Grid container sx={{ gap: 1 }} alignItems='center'>
            <IconButton
              color='inherit'
              sx={{ display: { xs: 'block', sm: 'none' } }}
            >
              <Menu />
            </IconButton>
            <Typography variant='h6' sx={{ flexGrow: 1 }}>
              Product Store
            </Typography>

            <Divider />
            <ImgButton color='whatsapp.main' icon={<LocalGroceryStore />} />
            <ImgButton color='whatsapp.main' icon={<WhatsApp />} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: toolbarHeight }} />
    </>
  );
};
