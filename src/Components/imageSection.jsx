import React from 'react';

const ImageSection = ({ id, title, text, imageSrc, width, link}) => {
  return (
    <div 
        id={id} 
        className="ImageSection"
        onClick={() =>
            (window.open('https://maps.app.goo.gl/6EPJc1PpojAuK2Ug6', '_blank')
        )}
    >
          <h2 style={{marginBottom: 40}} className="tittle">{title}</h2>
          <i className="subTittle">{text}</i>
          <img width={width} height="auto" src={imageSrc} alt={`Imagen ${title}`} style={{borderRadius: '5px'}} />
    </div>
  );
};

export default ImageSection;