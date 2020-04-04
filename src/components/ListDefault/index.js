import React from 'react';
import PropTypes from 'prop-types';

import { Table } from './styles';

export default function ListDefault({ children }) {
  return <Table>{children}</Table>;
}

ListDefault.propTypes = {
  children: PropTypes.element.isRequired,
};
