import React, { useState } from 'react';

import { MdMoreHoriz } from 'react-icons/md';

import { Container, Badge, ActionsList } from './styles';

export default function Actions({ children }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz color="#C6C6C6" size={20} />
      </Badge>

      <ActionsList visible={visible}>{children}</ActionsList>
    </Container>
  );
}
