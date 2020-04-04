import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import { customStyles } from './styles';

export default function ModalDefault({ children, ...rest }) {
  return (
    <Modal style={customStyles} {...rest}>
      {children}
    </Modal>
  );
}

ModalDefault.propTypes = {
  children: PropTypes.element.isRequired,
};
