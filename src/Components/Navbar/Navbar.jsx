import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { TiThMenu } from "react-icons/ti";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link as ScrollLink } from 'react-scroll';
import MenuItem from '@mui/material/MenuItem';

// Importa la imagen (asegúrate de que la ruta sea correcta)
import logoImage from '../../../public/images/logonavbar.png';
import ImageGalleryModal from '../photosGallery/ImageGalleryModal';

const pages = [
  { id: '1', etiqueta: 'Acerca del evento' },
  { id: '2', etiqueta: 'Módulos' },
 /* { id: '3', etiqueta: 'Ubicacion' },
  { id: '4', etiqueta: 'Agende su visita' },*/
  { id: '5', etiqueta: 'Galería' },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'rgb(25, 25, 45, 0.5)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo para pantallas medianas y grandes */}
          <Box
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              alignItems: 'center', // Centra verticalmente la imagen
            }}
          >
            <img
              src={logoImage}
              alt="Agua en Movimiento Logo"
              style={{
                height: '40px', // Ajusta la altura según necesites
                maxWidth: '150px', // Ajusta el ancho máximo según necesites
                width: 'auto',
              }}
            />
          </Box>

          {/* Menú hamburguesa para pantallas pequeñas */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <TiThMenu size={40} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <ScrollLink
                  to={page.id}
                  onClick={page.id==='4' ? () =>
                (window.open('https://forms.gle/nH3Lg4pib4B8ShWa9', '_blank')
                ) : page.id==='5' ? () => <ImageGalleryModal/> : handleCloseNavMenu}
                  smooth={true}
                  duration={500}
                  key={page.id}
                >
                  <MenuItem>
                    <Typography textAlign="center">{page.etiqueta}</Typography>
                  </MenuItem>
                </ScrollLink>
              ))}
            </Menu>
          </Box>

          {/* Logo para pantallas pequeñas */}
          <Box
            component="a"
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              textDecoration: 'none',
              alignItems: 'center', // Centra verticalmente la imagen
              justifyContent: 'center', // Centra horizontalmente en pantallas pequeñas
            }}
          >
            <img
              src={logoImage}
              alt="Agua en Movimiento Logo"
              style={{
                height: '30px', // Ajusta la altura para pantallas pequeñas
                maxWidth: '120px', // Ajusta el ancho máximo para pantallas pequeñas
                width: 'auto',
              }}
            />
          </Box>

          {/* Menú para pantallas medianas y grandes */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <ScrollLink to={page.id} smooth={true} duration={500} key={page.id}>
                <Button
                  onClick={page.id==='4' ? () =>
                (window.open('https://forms.gle/nH3Lg4pib4B8ShWa9', '_blank')
                ) : page.id==='5' ? () => <ImageGalleryModal/> : handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.etiqueta}
                </Button>
              </ScrollLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;