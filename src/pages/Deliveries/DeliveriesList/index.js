import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import api from '~/services/api';
import Actions from '~/components/Actions';
import ListDefault from 'components/ListDefault';
import HeaderList from 'components/HeaderList';
import FooterList from 'components/FooterList';

import ModalDeliveries from './ModalDeliveries';
import Badges from './Badges';
import { MdVisibility, MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { ContainerList } from '~/styles/defaults';

import { deliveryUpdateRequest } from '~/store/modules/delivery/actions';

export default function DeliveriesList() {
  const dispatch = useDispatch();
  const [deliveries, setDeliveries] = useState([]);
  const [searchDeliveries, setSearchDeliveries] = useState();
  const [indexPage, setIndexPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({
    recipient: {},
    deliveryman: {},
  });

  async function loadDeliveries() {
    try {
      const response = await api.get('deliveries', {
        params: { name: searchDeliveries, page: indexPage },
      });

      setDeliveries(response.data);
    } catch (err) {
      toast.error('Não foi possível carregar a lista de entregas');
    }
  }

  useEffect(() => {
    loadDeliveries();
  }, [searchDeliveries, indexPage]);

  const lastIndexPage = useMemo(() => (deliveries.length < 10 ? true : false), [
    deliveries.length,
  ]);

  function handleEdit(delivery) {
    dispatch(deliveryUpdateRequest(delivery));
  }

  async function handleDelete(id) {
    if (window.confirm('Deseja mesmo daletar o entregador?')) {
      try {
        await api.delete(`deliveries/${id}`);

        toast.success('Entrega deletada com sucesso!');
        loadDeliveries();
      } catch (err) {
        toast.error('Não foi possível deletar a entrega');
      }
    }
  }

  function openModal(delivery) {
    setModalData(delivery);
    setModalIsOpen(true);
  }

  function handleSubmit({ search }) {
    setSearchDeliveries(search);
  }

  return (
    <ContainerList>
      <strong>Gerenciamento de encomendas</strong>

      <HeaderList urlLink={'/encomendas/cadastrar'} onSubmit={handleSubmit} />

      <ListDefault>
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
                <Badges
                  start_date={delivery.start_date}
                  end_date={delivery.end_date}
                  canceled_at={delivery.canceled_at}
                />
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
      </ListDefault>

      <ModalDeliveries
        data={modalData}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />

      <FooterList
        index={indexPage}
        lastIndex={lastIndexPage}
        antClic={() => setIndexPage(indexPage - 1)}
        proxClic={() => setIndexPage(indexPage + 1)}
      />
    </ContainerList>
  );
}
