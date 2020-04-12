import React from 'react';

import { Container } from './styles';

export default function FooterList({ index, lastIndex, antClic, proxClic }) {
  return (
    <Container>
      <button
        type="submit"
        onClick={antClic}
        disabled={index < 2 ? true : false}
      >
        Anterior
      </button>

      <div>
        <span>{index}</span>
      </div>

      <button
        type="submit"
        onClick={proxClic}
        disabled={lastIndex ? true : false}
      >
        Próximo
      </button>
    </Container>
  );
}
