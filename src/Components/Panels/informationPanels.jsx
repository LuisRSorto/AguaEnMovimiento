import React, { useState, useRef } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea, Modal, Box, List, ListItem, ListItemText, ListItemButton, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const panelsData = [
  {
    title: 'INTRODUCCIÓN',
    description: 'El agua que nos une tiene muchas historias que contar, algunas veces de desigualdad y resistencia, otras de crisis y esperanza. Te invitamos a un recorrido transformador en el que cada tema será un portal para entenderla como derecho humano, protegerla como patrimonio común, restaurarla como solución climática y garantizarla como legado a las futuras generaciones.',
    imageUrl: '/images/introduccion.png',
    subTexto: '¡Convierte este conocimiento en acción transformadora!',
    audios: [
      { title: 'Melodía Introducción 1', artist: 'Autor 1', url: '/audios/intro1.mp3' },
      { title: 'Melodía Introducción 2', artist: 'Autor 2', url: '/audios/intro2.mp3' },
    ],
    musicPlayingImageUrl: '/images/introduccion.png',
  },
  {
    title: 'AGUA EN MOVIMIENTO',
    description: "El agua se mantiene en constante movimiento cíclico, fluye, se transforma y regresa, conectando océanos, ríos, nubes y vidas. Da forma a nuestro planeta y a nuestra historia, desde las antiguas civilizaciones hasta las modernas infraestructuras, el agua ha impulsado el desarrollo humano.",
    imageUrl: '/images/modulo1.png',
    subTexto: '¡Descubramos el ciclo del agua y reconozcamos su importancia histórica!',
    audios: [
      { title: 'I1. Historia del uso humano del agua', artist: 'Ing. PhD Sebastián Charchalac', url: '/audios/modulo1_1.mp3' },
      { title: 'I2. El ciclo del agua', artist: 'M.Sc Alicia García', url: '/audios/modulo1_2.mp3' },
      { title: 'I3. Factores que afectan el ciclo del agua', artist: 'M.Sc Mario Randolfo Moreno', url: '/audios/modulo1_3.mp3' },
      { title: 'I4. Impacto del ciclo del agua en el ambiente', artist: 'M.Sc Mario Randolfo Moreno', url: '/audios/modulo1_4.mp3' },
    ],
    musicPlayingImageUrl: '/images/modulo1.png',
  },
  {
    title: 'AGUA PARA TODAS LAS PERSONAS',
    description: 'El acceso al agua no es igual para todas las personas, las mujeres y niñas en comunidades rurales son las más afectadas, impacta en su salud, su educación y sus oportunidades de desarrollo.',
    imageUrl: '/images/modulo2.png',
    subTexto: '¡Exploremos estas diferencias y apreciemos el trabajo de las mujeres en la gestión del agua!',
    audios: [
      { title: 'I1. Agua, salud e higiene desde una perspectiva de género', artist: 'Licda. Catalina Esquivel', url: '/audios/modulo2_1.mp3' },
      { title: 'I2. El papel de las mujeres en la gestión del agua', artist: 'Licda. Catalina Esquivel', url: '/audios/modulo2_2.mp3' },
      { title: 'I3. Experiencias de mujeres en gestión comunitaria del agua', artist: 'Licda. Catalina Esquivel', url: '/audios/modulo2_3.mp3' },
    ],
    musicPlayingImageUrl: '/images/modulo2.png',
  },
  {
    title: 'AGUA LIMPIA',
    description: 'El agua insalubre, el saneamiento inadecuado y la falta de higiene desempeñan un papel importante en la propagación de enfermedades. Debemos proteger nuestras fuentes hídricas, invertir en sistemas de purificación sostenibles y educar sobre su uso responsable.',
    imageUrl: '/images/modulo3.png',
    subTexto: '¡Veamos algunas ideas para tener agua limpia!',
    audios: [
      { title: 'I1. Calidad del agua: parámetros físicos, químicos y biológicos', artist: 'PhD Thalía Turrén Cruz', url: '/audios/modulo3_1.mp3' },
      { title: 'I2a. Servicios de suministros de agua y saneamiento', artist: 'PhD Thalía Turrén Cruz', url: '/audios/modulo3_2a.mp3' },
      { title: 'I2b. Servicios de suministros de agua y saneamient.', artist: 'PhD Thalía Turrén Cruz', url: '/audios/modulo3_2b.mp3' },
    ],
    musicPlayingImageUrl: '/images/modulo3.png',
  },
  {
    title: 'AGUA PARA SIEMPRE',
    description: 'Es imposible concebir la vida, como la conocemos, sin agua.  El agua no es un recurso infinito, pero puede ser sostenible si cambiamos nuestra relación con ella.',
    imageUrl: '/images/modulo4.png',
    subTexto: ' ¡Identifiquemos los múltiples usos del agua y veamos cómo garantizar este bien para las generaciones presentes y futuras a pesar de las presiones del entorno!',
    audios: [
      { title: 'Audio 5.1', artist: 'Artista 6', url: '/audios/audio5_1.mp3' },
      { title: 'Audio 5.2', artist: 'Artista 7', url: '/audios/audio5_2.mp3' },
    ],
    musicPlayingImageUrl: '/images/modulo4.png',
  },
  {
    title: 'EL PLANETA TIENE SED',
    description: 'Sequías más largas, inundaciones más brutales y nieves que desaparecen son gritos de la Tierra pidiendo ayuda. La crisis climática impacta en la seguridad hídrica, amenaza la biodiversidad y compromete el desarrollo sostenible.',
    imageUrl: '/images/modulo9.png',
    subTexto: '¡Reconoce estos impactos adversos para estar mejor adaptados a estos cambios!',
    audios: [
      { title: 'I2. Cambio climático y gestión del agua', artist: 'MEng. María Fernanda Rivas', url: '/audios/modulo5_2.mp4' },
      { title: 'I5. Medidas para afrontar los riesgos hídricos', artist: 'MEng. María Fernanda Rivas', url: '/audios/modulo5_5.mp4' },
      { title: 'I6a. Impacto en Centroamérica', artist: 'MEng. María Fernanda Rivas', url: '/audios/modulo5_6a.mp4' },
      { title: 'I6b. Impacto en Centroamérica', artist: 'MEng. María Fernanda Rivas', url: '/audios/modulo5_6b.mp4' },
    ],
    musicPlayingImageUrl: '/images/modulo9.png',
  },
  {
    title: 'RECUPEREMOS EL AGUA',
    description: 'Cada gota cuenta. El tratamiento de aguas residuales es una responsabilidad con nuestro planeta y con nuestros hijos. Al reutilizar y purificar el agua, cuidamos la salud, el medio ambiente y garantizamos este recurso para las próximas generaciones.',
    imageUrl: '/images/modulo6.png',
    subTexto: '¡Actuemos hoy por un mañana sostenible!',
    audios: [
      { title: 'Audio 7.1', artist: 'Artista 9', url: '/audios/audio7_1.mp3' },
    ],
    musicPlayingImageUrl: '/images/modulo6.png',
  },
  {
    title: 'EL AGUA COMO DERECHO UNIVERSAL',
    description: 'El acceso al agua no es un privilegio, es un derecho universal. Garantizar el acceso equitativo, al agua potable y saneamiento es un compromiso con la vida, la dignidad humana, la justicia ambiental y el desarrollo sostennible.',
    imageUrl: '/images/modulo7.png',
    subTexto: '¡Aprende sobre este tema en esta sección! ',
    audios: [
      { title: 'I1. El agua como derecho humano', artist: 'Jeremy Garro', url: '/audios/modulo7_1.mp3' },
      { title: 'I2. Normativa en materia de aguas', artist: 'Jeremy Garro', url: '/audios/modulo7_2.mp3' },
      { title: 'I3. Gobernanza del agua: enfoques y desafíos', artist: 'Jeremy Garro', url: '/audios/modulo7_3.mp3' },
      { title: 'I4. Administración pública del agua', artist: 'Jeremy Garro', url: '/audios/modulo7_4.mp3' },
    ],
    musicPlayingImageUrl: '/images/modulo7.png',
  },
  {
    title: 'EL AGUA COMO UN BIEN COMÚN',
    description: 'El agua nos pertenece a todos y su gestión debe ser responsable y equitativa. Cuidarla y compartirla no es opcional, es un deber colectivo, porque de ella depende nuestra salud, nuestros ecosistemas y el futuro de nuestras comunidades.',
    imageUrl: '/images/modulo8.png',
    subTexto: '¡Descubre aquí la importancia de la acción colectiva!',
    audios: [
      { title: 'I1. Resolución de conflictos relacionados con el agua', artist: 'Mag. Allison Quesada', url: '/audios/modulo8_1.mp3' },
      { title: 'I2. Gestión de proyectos hídricos', artist: 'Mag. Allison Quesada', url: '/audios/modulo8_2.mp3' },
      { title: 'I3. Financiación y fondeo de servicios de agua', artist: 'Mag. Allison Quesada', url: '/audios/modulo8_3.mp3' },
      { title: 'I4. Valoración de inversiones y financiación en infraestructura hidráulica', artist: 'Mag. Allison Quesada', url: '/audios/modulo8_4.mp3' },
    ],
    musicPlayingImageUrl: '/images/modulo8.png',
  },
  {
    title: 'EL FUTURO DEL AGUA',
    description: 'Terminamos el recorrido transformándonos en embajadores del agua para protegerla como derecho humano, bien común y solución climática, educando, innovando, investigando y actuando desde nuestros espacios.',
    imageUrl: '/images/modulo5.png',
    subTexto: ' ¡El futuro del agua no se escribe solo, lo construimos juntos!',
    audios: [
      { title: 'Reflexión Final', artist: 'Varios', url: '/audios/final.mp3' },
    ],
    musicPlayingImageUrl: '/images/modulo5.png',
  },
];

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  width: '350px',
  border: `1px solid ${theme.palette.divider}`,
  boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.05)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)',
    boxShadow: '4px 4px 16px rgba(255, 255, 255, 0.1)',
  },
}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90%',
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: (theme) => theme.spacing(1),
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  p: 4,
  textAlign: 'center',
};

const modalContentStyle = {
  maxWidth: '100%',
};

const InformationPanels = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPanelData, setSelectedPanelData] = useState(null);
  const [currentAudioUrl, setCurrentAudioUrl] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleCardClick = (panel) => {
    setSelectedPanelData(panel);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentAudioUrl(null);
      audioRef.current = null;
    }
  };

  const handlePlay = (audioUrl) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentAudioUrl(audioUrl);
    setIsPlaying(true);
    audioRef.current = new Audio(audioUrl);
    audioRef.current.play();
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTogglePlay = (audioUrl) => {
    if (currentAudioUrl === audioUrl && isPlaying) {
      handlePause();
    } else {
      handlePlay(audioUrl);
    }
  };

  return (
    <Grid container spacing={3} justifyContent="center" style={{ padding: '30px' }}>
      {panelsData.map((panel, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
          <StyledCard>
            <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '500px' }} onClick={() => handleCardClick(panel)}>
              <CardMedia
                component="img"
                sx={{ width: 'auto', height: '160px', objectFit: 'cover' }}
                image={panel.imageUrl}
                alt={panel.title}
              />
              <CardContent style={{ flexGrow: 1, padding: (theme) => theme.spacing(2) }}>
                <Typography variant="h6" component="h2" gutterBottom>
                  {panel.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {panel.description}
                </Typography>
                <br/>
                <Typography variant="body2" color="black">
                  {panel.subTexto}
                </Typography>
              </CardContent>
            </CardActionArea>
          </StyledCard>
        </Grid>
      ))}

      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="audio-player-modal-title"
        aria-describedby="audio-player-modal-description"
      >
        <Box sx={modalStyle}>
          <div style={modalContentStyle}>
            {selectedPanelData && (
              <>
                <img
                  src={selectedPanelData.musicPlayingImageUrl}
                  alt={`Música Reproduciéndose de ${selectedPanelData.title}`}
                  style={{
                    maxWidth: '140px',
                    marginBottom: '20px',
                  }}
                />
                {currentAudioUrl && (
                  <Typography className='modalText' sx={{color:'rgb(0, 84, 193)'}} id="audio-player-modal-title" variant="h6" component="h2" gutterBottom>
                    Reproduciendo: {selectedPanelData.audios.find(audio => audio.url === currentAudioUrl)?.title || 'Desconocido'} - {selectedPanelData.audios.find(audio => audio.url === currentAudioUrl)?.artist || 'Desconocido'}
                  </Typography>
                )}
                <Typography className='modalText' id="audio-player-modal-description" variant="h5" gutterBottom>
                  Lista de Temas de: {selectedPanelData.title}
                </Typography>
                <List sx={{ width: '100%', maxWidth: 550, bgcolor: 'background.paper', margin: '0 auto' }}>
                  {selectedPanelData.audios.map((audio) => (
                    <ListItem key={audio.url} onClick={() => handleTogglePlay(audio.url)} disableGutters secondaryAction={
                      <IconButton edge="end" aria-label="play" onClick={() => handleTogglePlay(audio.url)}>
                        {currentAudioUrl === audio.url && isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                      </IconButton>
                    }>
                      <ListItemButton style={{ paddingRight: '56px' }}>
                        <Avatar sx={{ marginRight: '10px' }}>
                          <MusicNoteIcon />
                        </Avatar>
                        <ListItemText sx={{width:'100%'}} className='modalText' primary={audio.title} secondary={audio.artist} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </div>
        </Box>
      </Modal>
    </Grid>
  );
};

export default InformationPanels;