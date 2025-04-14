import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import {MdOutlineMarkEmailUnread} from "react-icons/md";
import './footer.css'; // Asegúrate de tener un archivo de estilos para el footer

const Footer = () => {
  const whatsappURL = 'https://api.whatsapp.com/send?phone=50494983115'; // Reemplaza con tu enlace de WhatsApp
  const emailURL = 'gina@unah.edu.hn'; // Reemplaza con tu dirección de correo electrónico

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-icons">
        <p>Contáctanos:&nbsp;&nbsp;</p>
          <a className='links' href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <BsWhatsapp size={20}/>&nbsp;<p>Whatsapp (+504 8955-9716)&nbsp;</p>
          </a>
       
          <a className='links' href={emailURL} target="_blank" rel="noopener noreferrer">
          <MdOutlineMarkEmailUnread size={25}/>&nbsp;<p>Correo Electrónico (nsandoval@upnfm.edu.hn)</p>
          </a>
       </div>
      </div>
        <p>{new Date().getFullYear()} GSDA. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;