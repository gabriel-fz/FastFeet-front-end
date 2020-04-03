import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { deliveryUpdate } from '~/store/modules/delivery/actions';

import { MdChevronLeft, MdCheck } from 'react-icons/md';
import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

import RecipientInput from '~/components/DeliveryInputs/RecipientInput';
import DeliverymanInput from '~/components/DeliveryInputs/DeliverymanInput';

export default function DeliveriesEdit() {
  const dispatch = useDispatch();
  const dataDelivery = useSelector(state => state.delivery.data);

  function handleSubmit(data) {
    const delivery = Object.assign({ data: data }, { id: dataDelivery.id });

    dispatch(deliveryUpdate(delivery));
  }

  return (
    <Container>
      <Form initialData={dataDelivery} onSubmit={handleSubmit}>
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
              <RecipientInput name="recipient_id" />
            </section>

            <section>
              <label>Entregador</label>
              <DeliverymanInput name="deliveryman_id" />
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
