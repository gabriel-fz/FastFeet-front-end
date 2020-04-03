import React from 'react';

import { Container } from './styles';

export default function Badges({ start_date, end_date, canceled_at }) {
  function checkStatus(status) {
    if (status.canceled_at) {
      return 'CANCELADA';
    }
    if (status.end_date) {
      return 'ENTREGUE';
    }
    if (!status.start_date) {
      return 'PENDENTE';
    }
    return 'RETIRADA';
  }

  return (
    <Container status={checkStatus({ start_date, end_date, canceled_at })}>
      <span>{checkStatus({ start_date, end_date, canceled_at })}</span>
    </Container>
  );
}
