import React from 'react';
import Logo from '../../assets/img/logo-casflix.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo Casflix" />
      </a>
      <Button as="a" className="ButtonLink" href="/" alt="botão">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
