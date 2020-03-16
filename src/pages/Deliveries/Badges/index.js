import React from 'react';

import { Container } from './styles';

export default function Badges({ status }) {
  return (
    <Container status={status}>
      <span>{status}</span>
    </Container>
  );
}
