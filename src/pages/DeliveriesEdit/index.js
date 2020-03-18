import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';
import { Link } from 'react-router-dom';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

import RecipientInput from './RecipientInput';
import DeliverymanInput from './DeliverymanInput';

export default function DeliveriesEdit({ match }) {
  const [deliveryId] = useState(match.params.deliveryId);
  const [dataDelivery, setDataDelivery] = useState();

  useEffect(() => {
    async function loadDelivery() {
      const response = await api.get(`deliveries/${deliveryId}`);

      setDataDelivery(response.data);
    }

    loadDelivery();
  }, [deliveryId]);

  const customStyles = {
    singleValue: styles => {
      return {
        ...styles,
        margin: '15px 0px',
        color: '#999999',
      };
    },
    valueContainer: styles => {
      return {
        ...styles,
        height: '45px',
      };
    },
    control: styles => {
      return {
        ...styles,
        border: '1px solid #dddddd',
      };
    },
    indicatorSeparator: styles => {
      return {
        ...styles,
        background: '#fff',
      };
    },
  };

  return (
    <Container>
      <Form initialData={dataDelivery}>
        <EditHeader>
          <h2>Edição de encomendas</h2>

          <div>
            <Link to="/deliveries">
              <MdChevronLeft color="#FFFFFF" size={20} />
              VOLTAR
            </Link>

            <ButtonSave type="submit">
              <MdCheck color="#FFFFFF" size={20} />
              SALVAR
            </ButtonSave>
          </div>
        </EditHeader>
        <Content>
          <Row>
            <section>
              <label>Destinatário</label>
              <RecipientInput
                name="recipient_id"
                valueId={dataDelivery}
                styles={customStyles}
              />
            </section>

            <section>
              <label>Entregador</label>
              <DeliverymanInput name="deliveryman_id" styles={customStyles} />
            </section>
          </Row>

          <Row>
            <section>
              <label>Nome do produto</label>
              <Input name="product" />
            </section>
          </Row>
        </Content>
      </Form>
    </Container>
  );
}
