import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import Actions from '~/components/Actions';

import { MdSearch, MdAdd, MdModeEdit, MdDeleteForever } from 'react-icons/md';

import { Container, LineTools, SearchTool, Table } from '~/styles/listsDefault';

export default function Recipients() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      setRecipients(response.data);
    }

    loadRecipients();
  }, []);

  return (
    <Container>
      <strong>Gerenciamento de destinatários</strong>
      <LineTools>
        <SearchTool>
          <MdSearch color="#999999" size={25} />
          <input type="search" placeholder="Buscar por destinatários" />
        </SearchTool>

        <Link to="/recipient/register">
          <MdAdd color="#fff" size={23} /> CADASTRAR
        </Link>
      </LineTools>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map(recipient => (
            <tr>
              <td>{recipient.id}</td>
              <td>{recipient.name}</td>
              <td>
                {`${recipient.address}, ${recipient.address_number}, ${recipient.city} - ${recipient.state} (${recipient.complement})`}
              </td>
              <td>
                <Actions>
                  <div>
                    <Link to={`/recipient/edit/${recipient.id}`}>
                      <MdModeEdit color="#4D85EE" size={15} /> Editar
                    </Link>
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
