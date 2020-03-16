import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import Actions from '~/components/Actions';

import { MdMoreHoriz, MdVisibility, MdDeleteForever } from 'react-icons/md';

import { Container, Table, OptionsButton } from '~/styles/listsDefault';

export default function DeliveryProblem() {
  const [deliveryProblems, setDeliveryProblems] = useState([]);

  useEffect(() => {
    async function loadDeliveryProblems() {
      const response = await api.get('delivery/problems');

      setDeliveryProblems(response.data);
    }

    loadDeliveryProblems();
  }, []);

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
          <tr>
            <td>#01</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <Actions>
                <div>
                  <button type="button">
                    <MdVisibility color="#4D85EE" size={15} /> Visualizar
                  </button>
                </div>

                <div>
                  <button type="button">
                    <MdDeleteForever color="#DE3B3B" size={15} /> Cancelar
                    encomenda
                  </button>
                </div>
              </Actions>
            </td>
          </tr>
          <tr>
            <td>#02</td>
            <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
            <td>
              <OptionsButton type="submit">
                <MdMoreHoriz color="#C6C6C6" size={20} />
              </OptionsButton>
            </td>
          </tr>

          {deliveryProblems.map(deliveryProblem => (
            <tr>
              <td>{deliveryProblem.id}</td>
              <td>{deliveryProblem.description}</td>
              <td>
                <OptionsButton type="submit">
                  <MdMoreHoriz color="#C6C6C6" size={20} />
                </OptionsButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
