import React from 'react';
import { Link } from 'react-router-dom';

import Actions from '~/components/Actions';

import {
  MdSearch,
  MdAdd,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, LineTools, SearchTool, Table } from '~/styles/listsDefault';

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
              <Actions>
                <div>
                  <button type="button">
                    <MdVisibility color="#8E5BE8" size={15} /> Visualizar
                  </button>
                </div>

                <div>
                  <button type="button">
                    <MdModeEdit color="#4D85EE" size={15} /> Editar
                  </button>
                </div>

                <div>
                  <button type="button">
                    <MdDeleteForever color="#DE3B3B" size={15} /> Excluir
                  </button>
                </div>
              </Actions>
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
              <Actions />
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
              <Actions />
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
              <Actions />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
