import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

const panelsData = [
  {
    title: 'INTRODUCCIÓN',
    description: 'El agua que nos une tiene muchas historias que contar, algunas veces de desigualdad y resistencia, otras de crisis y esperanza. Te invitamos a un recorrido transformador en el que cada tema será un portal para entenderla como derecho humano, protegerla como patrimonio común, restaurarla como solución climática y garantizarla como legado a las futuras generaciones.',
    imageUrl: '/images/introduccion.png', // Reemplaza con la ruta real de la imagen
    subTexto:'¡Convierte este conocimiento en acción transformadora!'
  },
  {
    title: 'AGUA EN MOVIMIENTO',
    description: "El agua se mantiene en constante movimiento cíclico, fluye, se transforma y regresa, conectando océanos, ríos, nubes y vidas. Da forma a nuestro planeta y a nuestra historia, desde las antiguas civilizaciones hasta las modernas infraestructuras, el agua ha impulsado el desarrollo humano.",
    imageUrl: '/images/modulo1.png', // Reemplaza con la ruta real de la imagen
    subTexto:'¡Descubramos el ciclo del agua y reconozcamos su importancia histórica!'
  },
  {
    title: 'AGUA PARA TODAS LAS PERSONAS',
    description: 'El acceso al agua no es igual para todas las personas, las mujeres y niñas en comunidades rurales son las más afectadas, impacta en su salud, su educación y sus oportunidades de desarrollo.',
    imageUrl: '/images/modulo2.png', // Reemplaza con la ruta real de la imagen
    subTexto:'¡Exploremos estas diferencias y apreciemos el trabajo de las mujeres en la gestión del agua!'
  },
  {
    title: 'AGUA LIMPIA',
    description: 'El agua insalubre, el saneamiento inadecuado y la falta de higiene desempeñan un papel importante en la propagación de enfermedades. Debemos proteger nuestras fuentes hídricas, invertir en sistemas de purificación sostenibles y educar sobre su uso responsable.',
    imageUrl: '/images/modulo3.png', // Reemplaza con la ruta real de la imagen
    subTexto:'¡Veamos algunas ideas para tener agua limpia!'
  },
  {
    title: 'AGUA PARA SIEMPRE',
    description: 'Es imposible concebir la vida, como la conocemos, sin agua.  El agua no es un recurso infinito, pero puede ser sostenible si cambiamos nuestra relación con ella.',
    imageUrl: '/images/modulo4.png', // Reemplaza con la ruta real de la imagen
    subTexto:' ¡Identifiquemos los múltiples usos del agua y veamos cómo garantizar este bien para las generaciones presentes y futuras a pesar de las presiones del entorno!'
  },
  {
    title: 'EL PLANETA TIENE SED',
    description: 'Sequías más largas, inundaciones más brutales y nieves que desaparecen son gritos de la Tierra pidiendo ayuda. La crisis climática impacta en la seguridad hídrica, amenaza la biodiversidad y compromete el desarrollo sostenible.',
    imageUrl: '/images/modulo9.png', // Reemplaza con la ruta real de la imagen
    subTexto:'¡Reconoce estos impactos adversos para estar mejor adaptados a estos cambios!'
  },
  {
    title: 'RECUPEREMOS EL AGUA',
    description: 'Cada gota cuenta. El tratamiento de aguas residuales es una responsabilidad con nuestro planeta y con nuestros hijos. Al reutilizar y purificar el agua, cuidamos la salud, el medio ambiente y garantizamos este recurso para las próximas generaciones.',
    imageUrl: '/images/modulo6.png', // Reemplaza con la ruta real de la imagen
    subTexto:'¡Actuemos hoy por un mañana sostenible!'
  },
  {
    title: 'EL AGUA COMO DERECHO UNIVERSAL',
    description: 'El acceso al agua no es un privilegio, es un derecho universal. Garantizar el acceso equitativo, al agua potable y saneamiento es un compromiso con la vida, la dignidad humana, la justicia ambiental y el desarrollo sostennible.',
    imageUrl: '/images/modulo7.png', // Reemplaza con la ruta real de la imagen
    subTexto:'¡Aprende sobre este tema en esta sección! '
  },
  {
    title: 'EL AGUA COMO UN BIEN COMÚN',
    description: 'El agua nos pertenece a todos y su gestión debe ser responsable y equitativa. Cuidarla y compartirla no es opcional, es un deber colectivo, porque de ella depende nuestra salud, nuestros ecosistemas y el futuro de nuestras comunidades.',
    imageUrl: '/images/modulo8.png', // Reemplaza con la ruta real de la imagen
    subTexto:'¡Descubre aquí la importancia de la acción colectiva!'
  },
  {
    title: 'EL FUTURO DEL AGUA',
    description: 'Terminamos el recorrido transformándonos en embajadores del agua para protegerla como derecho humano, bien común y solución climática, educando, innovando, investigando y actuando desde nuestros espacios.',
    imageUrl: '/images/modulo5.png', // Reemplaza con la ruta real de la imagen
    subTexto:' ¡El futuro del agua no se escribe solo, lo construimos juntos! ¡Aceptemos la responsabilidad y el desafío de ser voz y manos para este legado azul!'
  },
  // Continúa añadiendo las rutas de las imágenes para los demás paneles
];

// Componente Card estilizado para los bordes
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
  
  const InformationPanels = () => {
    return (
      <Grid container spacing={3} justifyContent="center" style={{ padding: '30px' }}>
        {panelsData.map((panel, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
            <StyledCard>
              <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '500px' }}>
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
                  <p variant="body2" color="textSecondary" >
                    {panel.subTexto}
                  </p>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    );
  };
  
  export default InformationPanels;