import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

export default function DefaultLayout({ children, linkActive }) {
  return (
    <Wrapper>
      <Header linkActive={linkActive} />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  linkActive: PropTypes.string.isRequired,
};
