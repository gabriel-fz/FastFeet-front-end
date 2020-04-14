import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '~/services/api';
import Actions from '~/components/Actions';
import ListDefault from 'components/ListDefault';
import HeaderList from 'components/HeaderList';
import FooterList from 'components/FooterList';

import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { ContainerList } from '~/styles/defaults';

export default function RecipientsList() {
  const [recipients, setRecipients] = useState([]);
  const [searchRecipients, setSearchRecipients] = useState();
  const [indexPage, setIndexPage] = useState(1);

  async function loadRecipients() {
    const response = await api.get('recipients', {
      params: { name: searchRecipients, page: indexPage },
    });
    setRecipients(response.data);
  }

  useEffect(() => {
    loadRecipients();
  }, [searchRecipients, indexPage]);

  const lastIndexPage = useMemo(() => (recipients.length < 10 ? true : false), [
    recipients.length,
  ]);

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
    <ContainerList>
      <strong>Gerenciamento de destinatários</strong>

      <HeaderList
        urlLink={'/destinatarios/cadastrar'}
        onSubmit={handleSubmit}
      />

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
            <tr key={recipient.id}>
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
                    <Link to={`/destinatarios/editar/${recipient.id}`}>
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

      <FooterList
        index={indexPage}
        lastIndex={lastIndexPage}
        antClic={() => setIndexPage(indexPage - 1)}
        proxClic={() => setIndexPage(indexPage + 1)}
      />
    </ContainerList>
  );
}
