import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { FaLocationDot } from "react-icons/fa6";
import './CarouselWithTimer.css'; // Importa el archivo de estilos
import { Carousel } from 'react-responsive-carousel';

const Countdown = () => {
  const targetDate = moment('2025-06-26', 'YYYY-MM-DD');
  const [remainingTime, setRemainingTime] = useState(targetDate.diff(moment()));

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const diff = targetDate.diff(now);

      if (diff <= 0) {
        clearInterval(interval);
        setRemainingTime(0);
      } else {
        setRemainingTime(diff);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const duration = moment.duration(remainingTime);
  console.log(moment())
  return (
    <div className="carousel-caption">
      <h2 >26, 27 y 28 de junio</h2>
      <h2 style={{color: '#ffdf00'}}><FaLocationDot/> CRU Danlí, UPNFM</h2>
      <h2>
        {duration.days()} Días, {duration.hours()} Horas, {duration.minutes()} Minutos, {duration.seconds()} Segundos
      </h2>
      
    </div>
  );
};

const CarouselWithTimer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <Carousel swipeable={false} showThumbs={false} dynamicHeight={false} showIndicators={false} showArrows={false} showStatus={false} transitionTime= {1}>
      <div className="carousel-item">
        <img
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      <div className="carousel-overlay">
        <Countdown />
      </div>
    </Carousel>
  );
};

export default CarouselWithTimer;