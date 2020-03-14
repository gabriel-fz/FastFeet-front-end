import React from 'react';
import { Link } from 'react-router-dom';

import { MdSearch, MdAdd, MdMoreHoriz } from 'react-icons/md';

import {
  Container,
  LineTools,
  SearchTool,
  Table,
  OptionsButton,
} from '~/styles/listsDefault';

export default function Deliveries() {
  return (
    <Container>
      <strong>Gerenciamento de encomendas</strong>
      <LineTools>
        <SearchTool>
          <MdSearch color="#999999" size={25} />
          <input type="search" placeholder="Buscar por encomendas" />
        </SearchTool>

        <Link to="/delivery/register">
          <MdAdd color="#fff" size={23} /> CADASTRAR
        </Link>
      </LineTools>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>Ludwig van Beethoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Ludwig van Beethoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Ludwig van Beethoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Ludwig van Beethoven</td>
            <td>John Doe</td>
            <td>Rio do Sul</td>
            <td>Santa Catarina</td>
            <td>Entregue</td>
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
