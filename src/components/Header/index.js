import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/fastfeet-logo.png';
import { Container, Content, Profile, Links } from './styles';

export default function Header({ linkActive }) {
  const dispatch = useDispatch();

  const [indexLink, setIndexLink] = useState();

  useEffect(() => {
    function checkLinkIndex() {
      if (linkActive === 'encomendas') {
        setIndexLink(1);
      }
      if (linkActive === 'entregadores') {
        setIndexLink(2);
      }
      if (linkActive === 'destinatarios') {
        setIndexLink(3);
      }
      if (linkActive === 'problemas') {
        setIndexLink(4);
      }
    }

    checkLinkIndex();
  }, [linkActive]);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Links active={indexLink}>
            <Link to="/encomendas">ENCOMENDAS</Link>
            <Link to="/entregadores">ENTREGADORES</Link>
            <Link to="/destinatarios">DESTINATÁRIOS</Link>
            <Link to="/problemas">PROBLEMAS</Link>
          </Links>
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

Header.propTypes = {
  linkActive: PropTypes.string,
};
