import React from 'react';
import Modal from 'react-modal';

import { customStyles } from './styles';

export default function ModalDefault({ children, ...rest }) {
  return (
    <Modal style={customStyles} {...rest}>
      {children}
    </Modal>
  );
}
