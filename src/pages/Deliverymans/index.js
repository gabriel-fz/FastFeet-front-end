import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import Actions from '~/components/Actions';
import avatarUser from '~/assets/avatar-user.png';

import { MdSearch, MdAdd, MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { Container, LineTools, Table } from '~/styles/listsDefault';

import {
  deliverymanUpdateRequest,
  deliverymanDelete,
} from '~/store/modules/deliveryman/actions';

export default function Deliverymans() {
  const dispatch = useDispatch();
  const [deliverymans, setDeliverymans] = useState([]);
  const [searchDeliverymans, setSearchDeliverymans] = useState();

  useEffect(() => {
    async function loadDeliverymans() {
      const response = await api.get('deliverymans', {
        params: { name: searchDeliverymans },
      });

      const data = response.data.map(deliveryman => ({
        ...deliveryman,
        avatarUrl: deliveryman.avatar ? deliveryman.avatar.url : avatarUser,
      }));

      setDeliverymans(data);
    }
    loadDeliverymans();
  }, [deliverymans, searchDeliverymans]);

  function handleEdit(deliveryman) {
    dispatch(deliverymanUpdateRequest(deliveryman));
  }

  function handleDelete(id) {
    if (window.confirm('Deseja mesmo daletar o entregador?')) {
      dispatch(deliverymanDelete(id));
      setDeliverymans(deliverymans);
    }
  }

  function handleSubmit({ search }) {
    setSearchDeliverymans(search);
  }

  return (
    <Container>
      <strong>Gerenciando entregadores</strong>

      <LineTools>
        <Form onSubmit={handleSubmit}>
          <MdSearch color="#999999" size={25} />
          <Input
            type="text"
            name="search"
            placeholder="Buscar por entregadores"
          />
        </Form>

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
              <td>
                <img src={deliveryman.avatarUrl} alt="" />
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <Actions>
                  <div>
                    <button
                      type="submit"
                      onClick={() => handleEdit(deliveryman)}
                    >
                      <MdModeEdit color="#4D85EE" size={15} /> Editar
                    </button>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={() => handleDelete(deliveryman.id)}
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
