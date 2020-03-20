import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import Actions from '~/components/Actions';

import { MdSearch, MdAdd, MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Container, LineTools, Table } from '~/styles/listsDefault';

import { recipientDelete } from '~/store/modules/recipient/actions';

export default function Recipients() {
  const dispatch = useDispatch();
  const [recipients, setRecipients] = useState([]);
  const [searchRecipients, setSearchRecipients] = useState();

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients', {
        params: { name: searchRecipients },
      });
      setRecipients(response.data);
    }
    loadRecipients();
  }, [recipients, searchRecipients]);

  function handleDelete(id) {
    if (window.confirm('Deseja mesmo daletar o entregador?')) {
      dispatch(recipientDelete(id));
      setRecipients(recipients);
    }
  }

  function handleSubmit({ search }) {
    setSearchRecipients(search);
  }

  return (
    <Container>
      <strong>Gerenciamento de destinatários</strong>
      <LineTools>
        <Form onSubmit={handleSubmit}>
          <MdSearch color="#999999" size={25} />
          <Input
            type="text"
            name="search"
            placeholder="Buscar por destinatários"
          />
        </Form>

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
                <p>
                  {`${recipient.address}, ${recipient.address_number}, ${recipient.city} - ${recipient.state} (${recipient.complement})`}
                </p>
              </td>
              <td>
                <Actions>
                  <div>
                    <Link to={`/recipient/edit/${recipient.id}`}>
                      <MdModeEdit color="#4D85EE" size={15} /> Editar
                    </Link>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={() => handleDelete(recipient.id)}
                    >
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
