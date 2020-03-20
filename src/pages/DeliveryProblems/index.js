import React, { useState, useEffect } from 'react';
import api from '~/services/api';
import { useDispatch } from 'react-redux';

import Actions from '~/components/Actions';

import { MdVisibility, MdDeleteForever } from 'react-icons/md';
import { Container, Table } from '~/styles/listsDefault';

import { deliveryCancel } from '~/store/modules/deliveryProblem/actions';

export default function DeliveryProblem() {
  const dispatch = useDispatch();
  const [deliveryProblems, setDeliveryProblems] = useState([]);

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('delivery/problems');

      setDeliveryProblems(response.data);
    }

    loadDeliveryProblems();
  }, [deliveryProblems]);

  function handleCancel(id) {
    if (window.confirm('Deseja mesmo cancelar a entrega?')) {
      dispatch(deliveryCancel(id));
      setDeliveryProblems(deliveryProblems);
    }
  }

  return (
    <Container>
      <strong>Problemas na entrega</strong>
      <Table>
        <thead>
          <tr>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveryProblems.map(deliveryProblem => (
            <tr>
              <td>{deliveryProblem.id}</td>
              <td>{deliveryProblem.description}</td>
              <td>
                <Actions>
                  <div>
                    <button type="button">
                      <MdVisibility color="#4D85EE" size={15} /> Visualizar
                    </button>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={() => handleCancel(deliveryProblem.id)}
                      disabled={
                        deliveryProblem.delivery.canceled_at ? true : false
                      }
                    >
                      <MdDeleteForever color="#DE3B3B" size={15} /> Cancelar
                      encomenda
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
