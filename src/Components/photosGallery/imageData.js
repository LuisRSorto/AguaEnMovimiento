// src/data/imageData.js (o puedes ponerlo al principio del mismo componente)

export const imagesData = [
    { id: 'img1', src: '/images/mapaupn.png', alt: 'Mapa general UPNFM', category: 'I Edición, Campus Central UPNFM' },
    { id: 'img2', src: '/images/gallery/fotob1.png', alt: 'Agua limpia', category: 'Módulos' },
    { id: 'img3', src: '/images/gallery/fotob2.png', alt: 'Ara Macao School, cierre El futuro del agua', category: 'I Edición, Campus Central UPNFM' },
    { id: 'img4', src: '/images/gallery/fotob3.png', alt: 'Autoridades, Agua para siempre', category: 'Módulos' },
    { id: 'img5', src: '/images/gallery/fotob4.png', alt: 'Autoridades, Agua para todas las personas', category: 'Módulos' },
    { id: 'img6', src: '/images/gallery/fotob5.png', alt: 'Autoridades, El planeta tiene sed', category: 'Módulos' },
    { id: 'img7', src: '/images/gallery/fotob6.png', alt: 'Autoridades, Agua limpia', category: 'Módulos' },
    { id: 'img8', src: '/images/gallery/fotob7.png', alt: 'Docentes, espacios instagrameables', category: 'I Edición, Campus Central UPNFM' },
    { id: 'img9', src: '/images/gallery/fotob8.png', alt: 'El planeta tiene sed', category: 'Módulos' },
    { id: 'img10', src: '/images/gallery/fotob9.png', alt: 'El planeta tiene sed', category: 'Módulos' },
    { id: 'img11', src: '/images/gallery/fotob10.png', alt: 'En bienvenida', category: 'I Edición, Campus Central UPNFM' },
    { id: 'img12', src: '/images/gallery/fotob11.png', alt: 'Estudiantes Ara School, Agua para siempre', category: 'I Edición, Campus Central UPNFM' },
    { id: 'img13', src: '/images/gallery/fotob12.png', alt: 'Instituto Hibueras, espacios instagrameables', category: 'I Edición, Campus Central UPNFM' },
    { id: 'img14', src: '/images/gallery/fotob13.png', alt: 'Estudiantes universitarios, Agua en movimiento', category: 'Módulos' },
    { id: 'img15', src: '/images/gallery/fotob14.png', alt: 'Estudiantes universitarios, Agua limpia', category: 'Módulos' },
    { id: 'img16', src: '/images/gallery/fotob15.png', alt: 'Estudiantes universitarios, Agua para siempre', category: 'Módulos' },
    { id: 'img17', src: '/images/gallery/fotob16.png', alt: 'Material del agua como derecho universal', category: 'I Edición, Campus Central UPNFM' },
    // Agrega más imágenes según tus necesidades
  ];
  
  // Extrae las categorías únicas para los botones de filtro
  export const categories = ['Todas', ...new Set(imagesData.map(img => img.category))];