import React from 'react';


import './footer.scss';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <div className="footer">
       <div className="footer__content container">
          <div className="footer__content__logo">
               <div className="logo">
                   <Link to="/">Unid FIlmes</Link>
               </div>
          </div>
          <div className="footer__content__menus">
               <div className="footer__content__menu">
                  <Link to="/">Inicio</Link>
                  <Link to="/">Contato</Link>
                  <Link to="/">Termos</Link>
               </div>
             <div className="footer__content__menu">
                   <Link to="/">Perguntas frequentes</Link>
                   <Link to="/">Premium</Link>
                   <Link to="/">Politica</Link>
                  </div>
               <div className="footer__content__menu">
                   <Link to="/">Desenvolvimento</Link>
                   <p>Desenvolvido por Ryan Nascimento de Lima</p>
                   <p>Processo seletivo da Unid</p>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Footer;