import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/Eliel5">
        <img src="https://fontmeme.com/permalink/200806/e49d58b4b69265ec8d6e39e2ceda02b2.png" alt="Logo Desenvolvedor" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
