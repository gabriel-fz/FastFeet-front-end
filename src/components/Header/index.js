import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to="/deliveries">ENCOMENDAS</Link>
          <Link to="/deliverymans">ENTREGADORES</Link>
          <Link to="/recipients">DESTINATÁRIOS</Link>
          <Link to="/delivery_problems">PROBLEMAS</Link>
        </nav>

        <aside>
          <Profile>
            <strong>Admin FastFeet</strong>
            <Link to="/">Sair do sistema</Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
