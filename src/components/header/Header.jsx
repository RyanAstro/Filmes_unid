import React, { useEffect, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './Header.scss';



const headerNav = [
  {
    display: 'Inicio',
    path: '/'
  },
  {
    display: 'Filmes',
    path: '/movie'
  },
  {
    display: 'series',
    path: '/tv'
  }
];

const Header = () => { 

  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex(e => e.path === pathname);

  useEffect(() => {
      const shirinkHeader = () => {
        if (document.body.scrolltop > 100 || document.documentElement.scrollTop > 100) {
          headerRef.current.classList.add('shrink');
        }
        else {
          headerRef.current.classList.remove('shrink');
        }
      }
    window.addEventListener('scroll', shirinkHeader);
      return () => {
        window.removeEventListener('scroll', shirinkHeader);
      };
    }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header_wrap container">
        <div className="logo">
              Unid
              <Link to="/">FIlmes</Link>      
        </div>
        <ul className="header_nav">
          {
            headerNav.map((e, i) => (
              <li key={i} className={`${i === active ? 'active' : ''}`}>
                <Link to={e.path}>
                  {e.display}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default Header;
