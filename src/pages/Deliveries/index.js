import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { parseISO, format } from 'date-fns';
import { Form, Input } from '@rocketseat/unform';

import Actions from '~/components/Actions';
import Badges from './Badges';
import {
  MdSearch,
  MdAdd,
  MdVisibility,
  MdModeEdit,
  MdDeleteForever,
} from 'react-icons/md';
import {
  Container,
  LineTools,
  Table,
  customStyles,
} from '~/styles/listsDefault';

import {
  deliveryUpdateRequest,
  deliveryDelete,
} from '~/store/modules/delivery/actions';

export default function Deliveries() {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [deliveries, setDeliveries] = useState([]);
  const [searchDeliveries, setSearchDeliveries] = useState();

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('deliveries', {
        params: { name: searchDeliveries },
      });

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
  }, [searchDeliveries]);

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

  function openModal(delivery) {
    const data = {
      rua: `${delivery.recipient.address}, nº ${delivery.recipient.address_number}`,
      cidade: `${delivery.recipient.city} - ${delivery.recipient.state}`,
      cep: delivery.recipient.zip_code,
      retirada: delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/YYY')
        : null,
      entrega: delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd/MM/YYY')
        : null,
      assinatura: delivery.signature ? delivery.signature.url : '',
    };
    console.log(data);
    setModalData(data);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmit({ search }) {
    setSearchDeliveries(search);
  }

  return (
    <Container>
      <strong>Gerenciamento de encomendas</strong>
      <LineTools>
        <Form onSubmit={handleSubmit}>
          <MdSearch color="#999999" size={25} />
          <Input
            type="text"
            name="search"
            placeholder="Buscar por encomendas"
          />
        </Form>

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
            <tr key={delivery.id}>
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
                    <button type="button" onClick={() => openModal(delivery)}>
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <strong>Informações da retirada</strong>
        <p>{modalData.rua}</p>
        <p>{modalData.cidade}</p>
        <p>{modalData.cep}</p>
        <br></br>
        <strong>Datas</strong>
        <p>
          <strong>Retirada:</strong>{' '}
          {modalData.retirada
            ? modalData.retirada
            : 'A encomenda ainda não foi retirada'}
        </p>
        <p>
          <strong>Entrega:</strong>{' '}
          {modalData.entrega
            ? modalData.entrega
            : 'A encomenda ainda não foi entregue'}
        </p>
        <br></br>
        <strong>Assinatura do destinatário</strong>
        <img src={modalData.assinatura} alt="" />
      </Modal>
    </Container>
  );
}
