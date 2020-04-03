import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdChevronLeft, MdCheck } from 'react-icons/md';

import api from '~/services/api';

import RecipientInput from '~/components/DeliveryInputs/RecipientInput';
import DeliverymanInput from '~/components/DeliveryInputs/DeliverymanInput';

import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

export default function DeliveriesEdit() {
  const dataDelivery = useSelector(state => state.delivery.data);

  async function handleSubmit(data) {
    try {
      await api.put(`deliveries/${dataDelivery.id}`, data);

      toast.success('Entrega atualizada com sucesso!');
    } catch (err) {
      toast.error('Não foi possível atualizar a entrega');
    }
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
