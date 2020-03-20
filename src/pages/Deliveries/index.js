import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { useDispatch } from 'react-redux';

import Actions from '~/components/Actions';

import Badges from './Badges';

import {
  deliveryUpdateRequest,
  deliveryDelete,
} from '~/store/modules/delivery/actions';

import {
  MdSearch,
  MdAdd,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, LineTools, SearchTool, Table } from '~/styles/listsDefault';

export default function Deliveries() {
  const dispatch = useDispatch();
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries');

      const data = response.data.map(delivery => ({
        ...delivery,
        status: checkStatus(
          delivery.start_date,
          delivery.end_date,
          delivery.canceled_at
        ),
      }));

      setDeliveries(data);
    }

    loadDeliveries();
  }, []);

  function checkStatus(start_date, end_date, canceled_at) {
    if (canceled_at) {
      return 'CANCELADA';
    }
    if (end_date) {
      return 'ENTREGUE';
    }
    if (!start_date) {
      return 'PENDENTE';
    }
    return 'RETIRADA';
  }

  function handleEdit(delivery) {
    dispatch(deliveryUpdateRequest(delivery));
  }

  function handleDelete(id) {
    if (window.confirm('Deseja mesmo daletar o entregador?')) {
      dispatch(deliveryDelete(id));
      setDeliveries(deliveries);
    }
  }

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
          {deliveries.map(delivery => (
            <tr>
              <td>{delivery.id}</td>
              <td>{delivery.recipient.name}</td>
              <td>{delivery.deliveryman.name}</td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.state}</td>
              <td>
                <Badges status={delivery.status} />
              </td>
              <td>
                <Actions>
                  <div>
                    <button type="button">
                      <MdVisibility color="#8E5BE8" size={15} /> Visualizar
                    </button>
                  </div>
                  <div>
                    <button type="submit" onClick={() => handleEdit(delivery)}>
                      <MdModeEdit color="#4D85EE" size={15} /> Editar
                    </button>
                  </div>
                  <div>
                    <button
                      type="submit"
                      onClick={() => handleDelete(delivery.id)}
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
