import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  IconButton,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  ButtonGroup,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'; // Icono para abrir la galería

// Importa tus datos de imágenes y categorías
import { imagesData, categories } from './imageData'; // Asegúrate de que la ruta sea correcta

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%', // Mayor ancho para la galería
  height: '90vh', // Mayor altura para la galería
  bgcolor: 'background.paper',
  borderRadius: (theme) => theme.spacing(2),
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden', // Oculta el overflow del modal principal
};

const galleryContentStyle = {
  flexGrow: 1, // Permite que el contenido de la galería ocupe el espacio restante
  overflowY: 'auto', // Habilita el scroll dentro de la galería
  paddingTop: (theme) => theme.spacing(2),
  paddingBottom: (theme) => theme.spacing(2),
};

const ImageGalleryModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const filteredImages = selectedCategory === 'Todas'
    ? imagesData
    : imagesData.filter(img => img.category === selectedCategory);

  return (
    <>
      {/* Botón para abrir la galería en la página principal */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<PhotoLibraryIcon />}
        onClick={handleOpen}
        sx={{ m: 2 }} // Un poco de margen para que no esté pegado
      >
        Ver Galería de Imágenes
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="image-gallery-modal-title"
        aria-describedby="image-gallery-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography id="image-gallery-modal-title" variant="h5" component="h2">
              Nuestra Galería de Imágenes
            </Typography>
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Controles de Categorías */}
          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            <ButtonGroup
              variant="outlined"
              aria-label="gallery category selection"
              orientation={isSmallScreen ? 'vertical' : 'horizontal'}
              fullWidth={isSmallScreen}
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? 'contained' : 'outlined'}
                >
                  {category}
                </Button>
              ))}
            </ButtonGroup>
          </Box>

          {/* Contenido de la Galería con Scroll */}
          <Box sx={galleryContentStyle}>
            <Grid container spacing={2}>
              {filteredImages.length > 0 ? (
                filteredImages.map((image) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="200" // Altura fija para las imágenes
                        image={image.src}
                        alt={image.alt}
                        sx={{ objectFit: 'cover' }} // Asegura que la imagen cubra el área
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {image.alt}
                        </Typography>
                        {image.category && (
                          <Typography variant="caption" color="text.disabled">
                            Categoría: {image.category}
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                    No hay imágenes para esta categoría.
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ImageGalleryModal;