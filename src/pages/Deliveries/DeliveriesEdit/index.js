import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';

import HeaderForm from '~/components/HeaderForm';
import DeliverymanInput from '~/components/DeliveryInputs/DeliverymanInput';
import RecipientInput from '~/components/DeliveryInputs/RecipientInput';

import { ContainerForm, Content, Row } from '~/styles/defaults';

export default function DeliveriesEdit() {
  const dataDelivery = useSelector(state => state.delivery.data);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);
    try {
      await api.put(`deliveries/${dataDelivery.id}`, data);

      setLoading(false);
      toast.success('Entrega atualizada com sucesso!');
    } catch (err) {
      setLoading(false);
      toast.error('Não foi possível atualizar a entrega');
    }
  }

  return (
    <ContainerForm>
      <Form initialData={dataDelivery} onSubmit={handleSubmit}>
        <HeaderForm
          name={'Edição de encomendas'}
          linkBack={'/deliveries'}
          loading={loading}
        />

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
    </ContainerForm>
  );
}
