import React from 'react';
import PropTypes from 'prop-types';

import ModalDefault from '~/components/ModalDefault';

import { Infos, Title } from './styles';

export default function ModalDeliveryProblems({ problem, ...rest }) {
  return (
    <ModalDefault {...rest}>
      <Title>VISUALIZAR PROBLEMA</Title>
      <Infos>
        <p>{problem}</p>
      </Infos>
    </ModalDefault>
  );
}

ModalDeliveryProblems.propTypes = {
  problem: PropTypes.string.isRequired,
};
