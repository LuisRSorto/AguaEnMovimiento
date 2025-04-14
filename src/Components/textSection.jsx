import React, { useEffect, useState } from 'react';

const TextSection = ({ id, title, subtittle, imageSrc }) => {
  const texto1 = " El evento Agua en Movimiento es una exposición itinerante diseñada para crear conciencia sobre la importancia del agua, su gestión sostenible y los desafíos que enfrenta este recurso vital en nuestro planeta. A través de módulos interactivos, información detallada y experiencias inmersivas, buscamos educar a personas de todas las edades sobre el ciclo del agua, su valor como derecho humano fundamental y la necesidad de proteger nuestras fuentes hídricas para las futuras generaciones."
  + "Durante la exposición, los visitantes podrán explorar temas como la evolución del uso del agua, su acceso equitativo, la problemática de la contaminación, la relación entre el agua y el cambio climático, y las acciones que cada uno de nosotros puede tomar para contribuir a una gestión más responsable y sostenible."
  const texto2=" ¡Te invitamos a ser parte de este importante recorrido y a descubrir cómo el agua nos conecta a todos!"
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id={id} className="section">
      <div
        className="parallax-background"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
        <div className="element">
          <div>
          <h2 className="tittle">{title}</h2>
          <p className="subTittle">{subtittle}</p>
          <p className="text">{texto1}</p>
          <p className="text" style={{marginTop: '10px'}}>{texto2}</p>
          </div>
        </div>
        <div className="element">
          <img width={'90%'} height={'auto'} src={imageSrc} alt={`Imagen ${title}`} />
        </div>
    </div>
  );
};

export default TextSection;