import React, { useState } from 'react';

function VideoSection({ videoUrl, placeholder }) {
    const [isVideoLoaded, setIsLoading] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
  
    const handlePlayClick = () => {
      setShowVideo(true);
      // La carga del video comenzará cuando el atributo src del <video> cambie
      // Si quisieras precargar metadatos, podrías hacerlo aquí.
    };
  
    return (
      <div>
        {!showVideo ? (
          <div onClick={handlePlayClick} style={{ cursor: 'pointer' }}>
            {placeholder ? (
              <img src={placeholder} alt="Play Video" style={{ maxWidth: '100%', height: 'auto' }} />
            ) : (
              <p>Hacer clic para cargar y reproducir el video</p>
            )}
          </div>
        ) : (
          <video
            controls // Muestra los controles de reproducción (play, pause, etc.)
            width="840" // Ajusta el ancho según necesites
            height="560" // Ajusta la altura según necesites
          >
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        )}
      </div>
    );
  }
  
  export default VideoSection;