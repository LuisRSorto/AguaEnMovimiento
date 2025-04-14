import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar/Navbar'
import CarouselWithTimer from './Components/CarouselWithTimer/CarouselWithTimer'
import Footer from './Components/Footer/footer'
import { Box, Container } from '@mui/material';
import InformationPanels from './Components/Panels/informationPanels';
import ImageSection from './Components/imageSection'
import TextSection from './Components/textSection'
import VideoSection from './Components/videoSection'
import BackgroundWaves from './Components/backgroundWaves'

function App() {
  const images = [
    '/images/carousel1.png',
    '/images/carousel2.png',
    '/images/carousel3.png',
    '/images/carousel4.png',
  ];

  const videoURL = '/videos/Aguaenmovimiento.mp4'; // Ruta a tu archivo .mp4 en la carpeta public o assets
  const placeholderURL = '/images/carousel1.png';

  return (
    <>
    <BackgroundWaves />
      <NavBar/>

      <CarouselWithTimer images={images}/>

      <TextSection
      id='1'
      title= 'Acerca del Evento'
      videoUrl='/videos/Aguaenmovimiento.mp4'
      />
     
      <h1 id='2' style={{color: "rgb(37, 0, 52)"}}>Módulos:</h1>
      <InformationPanels />

      <ImageSection
      id='3'
      title= 'Ubicación'
      text='Universidad Pedagógica Nacional Francisco Morazán, Tegucigalpa'
      imageSrc='images/mapa.png'
      />
    
      <Container sx={{textAlign: 'center'}}>
        <h1 style={{color: "rgb(37, 0, 52)"}}>Organizadores:</h1>
        <Box sx={{display:'flex', flexWrap: 'wrap',  justifyContent: { xs: 'center', md: 'space-around' }, alignItems: { xs: 'none', md: 'center' }, marginBottom: '40px'}}>
          <img 
            width="200px"
            style={{margin: '30px 20px 30px 0px'}} 
            height="auto"
            className="patroImg" 
            src={'/images/usac.png'} 
            onClick={() =>
            (window.open('https://usac.edu.gt/', '_blank')
            )}
            alt='usac' 
          />
          <img 
            width="130px"
            style={{margin: '30px 20px 30px 0px'}} 
            height="150px"
            className="patroImg" 
            src={'images/upnfm.png'}
            onClick={() =>
            (window.open('https://www.upnfm.edu.hn/', '_blank')
            )}
            alt='upnfm' 
          />
          
          <img 
            width="200px"
            style={{margin: '30px 20px 30px 0px'}} 
            height="auto"
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
            <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'center', alignItems:'center'}} >
            
            <img 
            width="220px" 
            style={{margin: '30px 20px 30px 0px'}} 
            height="auto"
            className="patroImg" 
            src={'images/csuca.png'} 
            onClick={() =>
            (window.open('https://seduca.csuca.org/index.php/miembros', '_blank')
            )}
            alt='csuca' />

            <img 
            width="220px" 
            style={{margin: '30px 20px 30px 0px'}} 
            height="auto"
            className="patroImg" 
            src={'images/idrc.png'} 
            onClick={() =>
            (window.open('https://idrc-crdi.ca/en', '_blank')
            )}
            alt='idrc' />

            <img 
            width="220px" 
            style={{margin: '30px 20px 30px 0px'}} 
            height="auto"
            className="patroImg" 
            src={'images/ctcap.png'} 
            onClick={() =>
            (window.open('https://www.incap.int/index.php/es/socios2/20-sistema-de-la-integracion-centroamericana', '_blank')
            )}
            alt='ctcap' />

            <img 
            width="220px" 
            style={{margin: '30px 20px 30px 0px'}} 
            height="auto"
            className="patroImg" 
            src={'images/SICA.png'} 
            onClick={() =>
            (window.open('https://www.sica.int/', '_blank')
            )}
            alt='SICA' />
            </div>
        </Box> 
      </Container>
      <Footer/>
    </>
  )
}

export default App
