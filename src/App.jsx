import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar/Navbar'
import CarouselWithTimer from './Components/CarouselWithTimer/CarouselWithTimer'
import Footer from './Components/Footer/footer'
import { Box, Container, Typography } from '@mui/material';
import InformationPanels from './Components/Panels/informationPanels';
import ImageSection from './Components/imageSection'
import TextSection from './Components/textSection'
import BackgroundWaves from './Components/backgroundWaves'
import ImageGalleryModal from './Components/photosGallery/ImageGalleryModal'

function App() {
  const images = [
    '/images/gallery/fotob35.png',
    '/images/gallery/fotob31.png',
    '/images/gallery/fotob27.png',
    '/images/gallery/fotob43.png',
  ];

  const videoURL = '/videos/Aguaenmovimiento.mp4'; // Ruta a tu archivo .mp4 en la carpeta public o assets
  const placeholderURL = '/images/carousel1.png';

  return (
    <>
    <BackgroundWaves />
    <div className="hero-image-container">
      <img src='/images/franja.png' alt={'Franja'} className="hero-image" />
    </div>
      <NavBar/>

      <CarouselWithTimer images={images}/>

      <TextSection
      id='1'
      title= 'Acerca del Evento'
      videoUrl='/videos/Aguaenmovimiento.mp4'
      />
     
      <h1 className={'tittle'} id='2' style={{color: "rgb(37, 0, 52)"}}>Módulos:</h1>
      <InformationPanels />

      <Box id='5' sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <ImageGalleryModal />
      </Box>

      { /* <ImageSection
      id='3'
      title= 'Ubicación'
      text='CRU Danlí, Universidad Pedagógica Nacional Francisco Morazán'
      imageSrc='images/mapadanli.png'
      width={'60%'}
      />

    <ImageSection
      id='3'
      title= 'Mapa UPNFM, CRU SPS'
      text=''
      imageSrc='images/mapagupnfmsps.png'
      width={'60%'}
      />*/}

      <div style={{ margin: '50px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
        <Typography component="h2" variant='h5' color="textSecondary" sx={{maxWidth:'80%'}}> En el Marco del Proyecto “Hacia una gestión SMART y Sostenible del agua en comunidades de Centroamérica, a través de investigación y educación innovadora e inclusiva (Gestión SMART-S del Agua)”</Typography>
        <img 
            width="auto"
            style={{margin: '30px'}} 
            height="100px"
            src={'/images/LOGOSMART.png'} 
            onClick={() =>
            (window.open('https://aguaenmovimiento.org/', '_blank')
            )}
            alt='aem' 
          />
      </div>
    
      <Container sx={{textAlign: 'center'}}>
        <h1 className={'tittle'} style={{color: "rgb(37, 0, 52)"}}>Miembros del consorcio:</h1>
        <Box sx={{display:'flex', flexWrap: 'wrap',  justifyContent: { xs: 'center', md: 'space-around' }, alignItems: { xs: 'none', md: 'center' }, marginBottom: '40px'}}>
        <Box sx={{display:'flex', flexWrap: 'wrap', flexDirection: { xs: 'column', sm: 'row'}, justifyContent:'center', alignItems:'center'}} >
          <img 
            width="auto"
            style={{margin: '30px 40px 30px 0px'}} 
            height="60px"
            className="patroImg" 
            src={'/images/usac.png'} 
            onClick={() =>
            (window.open('https://usac.edu.gt/', '_blank')
            )}
            alt='usac' 
          />
          <img 
            width="auto"
            style={{margin: '30px 20px 30px 0px'}} 
            height="130px"
            className="patroImg" 
            src={'images/upnfm.png'}
            onClick={() =>
            (window.open('https://www.upnfm.edu.hn/', '_blank')
            )}
            alt='upnfm' 
          />
          
          <img 
            width="auto"
            style={{margin: '30px 20px 30px 0px'}} 
            height="130px"
            className="patroImg" 
            src={'images/ucr.png'} 
            onClick={() =>
            (window.open('https://www.ucr.ac.cr/', '_blank')
            )}
            alt='ucr' 
          />

            <img 
            width="200px"
            style={{margin: '30px 20px 30px 0px'}} 
            height="auto"
            className="patroImg" 
            src={'images/tecm.png'} 
            onClick={() =>
            (window.open('https://tec.mx/es/monterrey', '_blank')
            )}
            alt='tecm' 
            />
          </Box>
          <h1 className={'tittle'} style={{color: "rgb(37, 0, 52)"}}>Con el patrocinio de:</h1>
          <Box sx={{display:'flex', flexWrap: 'wrap', flexDirection: { xs: 'column', sm: 'row'}, justifyContent:'center', alignItems:'center'}} >
            <img 
            width="auto" 
            style={{margin: '30px 20px 30px 0px'}} 
            height="140px"
            className="patroImg" 
            src={'images/idrccrdi.png'} 
            onClick={() =>
            (window.open('https://idrc-crdi.ca/en', '_blank')
            )}
            alt='idrccrdi' />

            <img 
            width="auto" 
            style={{margin: '30px 20px 30px 0px'}} 
            height="180px"
            className="patroImg" 
            src={'images/csuca.png'} 
            onClick={() =>
            (window.open('https://seduca.csuca.org/index.php/miembros', '_blank')
            )}
            alt='csuca' />

            <img 
            width="auto" 
            style={{margin: '30px 20px 30px 0px'}} 
            height="180px"
            className="patroImg" 
            src={'images/ctcap.png'} 
            onClick={() =>
            (window.open('https://www.incap.int/index.php/es/socios2/20-sistema-de-la-integracion-centroamericana', '_blank')
            )}
            alt='ctcap' />

            <img 
            width="auto" 
            style={{margin: '30px 20px 30px 0px'}} 
            height="150px"
            className="patroImg" 
            src={'images/SICA.png'} 
            onClick={() =>
            (window.open('https://www.sica.int/', '_blank')
            )}
            alt='SICA' />
            </Box>
        </Box> 
      </Container>
      <Footer/>
    </>
  )
}

export default App
