import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import Actions from '~/components/Actions';

import { MdSearch, MdAdd, MdModeEdit, MdDeleteForever } from 'react-icons/md';

import { Container, LineTools, SearchTool, Table } from '~/styles/listsDefault';

export default function Deliverymans() {
  const [deliverymans, setDeliverymans] = useState([]);

  useEffect(() => {
    async function loadDeliverymans() {
      const response = await api.get('deliverymans');

      setDeliverymans(response.data);
    }

    loadDeliverymans();
  }, []);

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
          {deliverymans.map(deliveryman => (
            <tr>
              <td>{deliveryman.id}</td>
              <td>TS</td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
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
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
