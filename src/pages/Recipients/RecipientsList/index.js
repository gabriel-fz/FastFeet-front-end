import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';
import Actions from '~/components/Actions';
import ListDefault from 'components/ListDefault';

import { MdSearch, MdAdd, MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Container, LineTools } from '~/styles/listsDefault';

export default function RecipientsList() {
  const [recipients, setRecipients] = useState([]);
  const [searchRecipients, setSearchRecipients] = useState();

  async function loadRecipients() {
    const response = await api.get('recipients', {
      params: { name: searchRecipients },
    });
    setRecipients(response.data);
  }

  useEffect(() => {
    loadRecipients();
  }, [recipients, searchRecipients]);

  async function handleDelete(id) {
    if (window.confirm('Deseja mesmo daletar o entregador?')) {
      try {
        await api.delete(`recipients/${id}`);

        toast.success('Destinatário deletado com sucesso!');
        loadRecipients();
      } catch (err) {
        toast.error('Não foi possível deletar o destinatário');
      }
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
      <ListDefault>
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
      </ListDefault>
    </Container>
  );
}
