import React from 'react';

import { MdMoreHoriz } from 'react-icons/md';

import { Container, Table, OptionsButton } from '~/styles/listsDefault';

export default function DeliveryProblem() {
  return (
    <Container>
      <strong>Problemas na entrega</strong>
      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
