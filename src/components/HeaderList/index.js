import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { MdSearch, MdAdd } from 'react-icons/md';

import { HeaderL } from './styles';

export default function HeaderList({ urlLink, ...rest }) {
  return (
    <HeaderL>
      <Form {...rest}>
        <MdSearch color="#999999" size={25} />
        <Input type="text" name="search" placeholder="Buscar por encomendas" />
      </Form>

      <Link to={urlLink}>
        <MdAdd color="#fff" size={23} /> CADASTRAR
      </Link>
    </HeaderL>
  );
}
