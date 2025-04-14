import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar/Navbar'
import CarouselWithTimer from './Components/CarouselWithTimer/CarouselWithTimer'
import Footer from './Components/Footer/footer'
import { Box, Container } from '@mui/material';
import InformationPanels from './Components/Panels/informationPanels';
import ImageSection from './Components/imageSection'
import TextSection from './Components/textSection'

function App() {
  const images = [
    '/images/carousel1.png', // Asegúrate de que las rutas sean correctas
    '/images/carousel2.png',
    '/images/carousel3.png',
    '/images/carousel4.png',
  ];

  return (
    <>
      <NavBar/>

      <CarouselWithTimer images={images}/>

      <TextSection
      id='1'
      title= 'Acerca del Evento'
      imageSrc='images/acercadelevento.png'
      />

      <h1 id='2' >Módulos:</h1>
      <InformationPanels />

      <ImageSection
      id='3'
      title= 'Ubicación'
      text='Universidad Pedagógica Nacional Francisco Morazán, Tegucigalpa'
      imageSrc='images/mapa.png'
      />
    
      <Container sx={{textAlign: 'center'}}>
        <h2>Organizadores:</h2>
        <Box sx={{display:'flex', flexWrap: 'wrap',  justifyContent: { xs: 'center', md: 'space-around' }, alignItems: { xs: 'none', md: 'center' }, marginBottom: '40px'}}>
          <img 
            width="200px"
            style={{margin: '30px 0px 30px 0px'}} 
            height="auto" 
            src={'/images/usac.png'} 
            onClick={() =>
            (window.open('https://www.apoautishn.org/', '_blank')
            )}
            alt='APO-AUTIST' 
          />
          <img 
            width="200px"
            style={{margin: '30px 0px 30px 0px'}} 
            height="auto" 
            src={'images/upnfm.png'}
            onClick={() =>
            (window.open('https://www.facebook.com/profile.php?id=100063723276220&locale=hi_IN', '_blank')
            )}
            alt='GINA' 
          />
          
          <img 
            width="200px"
            style={{margin: '30px 0px 30px 0px'}} 
            height="auto" 
            src={'images/ucr.png'} 
            onClick={() =>
            (window.open('https://owsd.net/network/honduras', '_blank')
            )}
            alt='OWSD' 
          />

            <img 
            width="200px"
            style={{margin: '30px 0px 30px 0px'}} 
            height="auto" 
            src={'images/tecm.png'} 
            onClick={() =>
            (window.open('https://www.facebook.com/FUNTEAH/?locale=hi_IN', '_blank')
            )}
            alt='funteah' 
          />

          <img 
            width="220px" 
            height="auto" 
            src={'images/idrc.png'} 
            onClick={() =>
            (window.open('https://www.unah.edu.hn/', '_blank')
            )}
            alt='UNAH' />
            
            <img 
            width="220px" 
            height="auto" 
            src={'images/csuca.png'} 
            onClick={() =>
            (window.open('https://www.unah.edu.hn/', '_blank')
            )}
            alt='csuca' />
            <img 
            width="220px" 
            height="auto" 
            src={'images/ctcap.png'} 
            onClick={() =>
            (window.open('https://www.unah.edu.hn/', '_blank')
            )}
            alt='ctcap' />

            <img 
            width="220px" 
            height="auto" 
            src={'images/SICA.png'} 
            onClick={() =>
            (window.open('https://www.unah.edu.hn/', '_blank')
            )}
            alt='SICA' />
        </Box> 
      </Container>
      <Footer/>
    </>
  )
}

export default App
