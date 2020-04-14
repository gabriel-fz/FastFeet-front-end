import React, { useState, useEffect, useMemo } from 'react';
import { MdVisibility, MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import Actions from '~/components/Actions';
import ListDefault from 'components/ListDefault';
import FooterList from 'components/FooterList';

import { ContainerList } from '~/styles/defaults';

import ModalDeliveryProblems from './ModalDeliveryProblems';

export default function DeliveryProblem() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);
  const [indexPage, setIndexPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [problemModal, setProblemModal] = useState();

  async function loadDeliveryProblems() {
    const response = await api.get('delivery/problems', {
      params: { page: indexPage },
    });

    setDeliveryProblems(response.data);
  }

  useEffect(() => {
    loadDeliveryProblems();
  }, [deliveryProblems]);

  const lastIndexPage = useMemo(
    () => (deliveryProblems.length < 10 ? true : false),
    [deliveryProblems.length]
  );

  async function handleCancel(id) {
    if (window.confirm('Deseja mesmo cancelar a entrega?')) {
      try {
        await api.delete(`/problem/${id}/cancel-delivery`);

        toast.success('Entrega calcelada com sucesso!');
        loadDeliveryProblems();
      } catch (err) {
        toast.error('Não foi possível cancelar a entrega');
      }
    }
  }

  function openModal(description) {
    setProblemModal(description);
    setModalIsOpen(true);
  }

  return (
    <ContainerList>
      <strong>Problemas na entrega</strong>
      <ListDefault>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveryProblems.map(deliveryProblem => (
            <tr key={deliveryProblem.id}>
              <td>{deliveryProblem.id}</td>
              <td>
                <p>{deliveryProblem.description}</p>
              </td>
              <td>
                <Actions>
                  <div>
                    <button
                      type="button"
                      onClick={() => openModal(deliveryProblem.description)}
                    >
                      <MdVisibility color="#4D85EE" size={15} /> Visualizar
                    </button>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={() => handleCancel(deliveryProblem.id)}
                    >
                      <MdDeleteForever color="#DE3B3B" size={15} />
                      Cancelar encomenda
                    </button>
                  </div>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </ListDefault>

      <ModalDeliveryProblems
        problem={problemModal}
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
