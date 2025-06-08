// src/data/imageData.js (o puedes ponerlo al principio del mismo componente)

export const imagesData = [
    { id: 'img1', src: '/images/mapaupn.png', alt: 'Foto de participante', category: 'Módulo1 1' },
    { id: 'img2', src: '/images/gallery/image2.jpg', alt: 'Edificio moderno', category: 'Arquitectura' },
    { id: 'img3', src: '/images/gallery/image3.jpg', alt: 'Flor colorida', category: 'Naturaleza' },
    { id: 'img4', src: '/images/gallery/image4.jpg', alt: 'Puente antiguo', category: 'Arquitectura' },
    { id: 'img5', src: '/images/gallery/image5.jpg', alt: 'Retrato de persona', category: 'Retratos' },
    { id: 'img6', src: '/images/gallery/image6.jpg', alt: 'Animal salvaje', category: 'Naturaleza' },
    { id: 'img7', src: '/images/gallery/image7.jpg', alt: 'Detalle de fachada', category: 'Arquitectura' },
    { id: 'img8', src: '/images/gallery/image8.jpg', alt: 'Sonrisa', category: 'Retratos' },
    { id: 'img9', src: '/images/gallery/image9.jpg', alt: 'Bosque frondoso', category: 'Naturaleza' },
    // Agrega más imágenes según tus necesidades
  ];
  
  // Extrae las categorías únicas para los botones de filtro
  export const categories = ['Todas', ...new Set(imagesData.map(img => img.category))];