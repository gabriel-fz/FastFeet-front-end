import React from 'react';
import { Link } from 'react-router-dom';

import Actions from '~/components/Actions';

import {
  MdSearch,
  MdAdd,
  MdMoreHoriz,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import {
  Container,
  LineTools,
  SearchTool,
  Table,
  OptionsButton,
} from '~/styles/listsDefault';

export default function Deliverymans() {
  return (
    <Container>
      <strong>Gerenciando entregadores</strong>

      <LineTools>
        <SearchTool>
          <MdSearch color="#999999" size={25} />
          <input type="search" placeholder="Buscar por entregadores" />
        </SearchTool>

        <Link to="/deliveryman/register">
          <MdAdd color="#fff" size={23} /> CADASTRAR
        </Link>
      </LineTools>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#01</td>
            <td>LD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>
              <Actions>
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
            <td>#01</td>
            <td>LD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>LD</td>
            <td>John Doe</td>
            <td>example@rocketseat.com</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>LD</td>
            <td>Gaspar Antunes</td>
            <td>example@rocketseat.com</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>LD</td>
            <td>Marc Franklin</td>
            <td>example@rocketseat.com</td>
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
