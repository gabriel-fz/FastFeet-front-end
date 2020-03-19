import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
            <button type="button" onClick={handleSignOut}>
              Sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
