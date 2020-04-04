import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import HeaderForm from '~/components/HeaderForm';
import RecipientInput from '~/components/DeliveryInputs/RecipientInput';
import DeliverymanInput from '~/components/DeliveryInputs/DeliverymanInput';

import { ContainerForm, Content, Row } from '~/styles/defaults';

export default function DeliveriesRegister() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ recipient_id, deliveryman_id, product }) {
    setLoading(true);
    try {
      await api.post('deliveries', {
        recipient_id,
        deliveryman_id,
        product,
      });

      setLoading(false);
      toast.success('Entrega cadastrada com sucesso');
      history.push('/deliveries');
    } catch (err) {
      setLoading(false);
      toast.error('Algo deu errado com o cadastro');
    }
  }

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit}>
        <HeaderForm
          name={'Cadastro de encomendas'}
          linkBack={'/deliveries'}
          loading={loading}
        />

        <Content>
          <Row>
            <section>
              <label>Destinatário</label>
              <RecipientInput
                name="recipient_id"
                placeholder="Digite o nome do destinatário"
              />
            </section>

            <section>
              <label>Entregador</label>
              <DeliverymanInput
                name="deliveryman_id"
                placeholder="Digite o nome do entregador"
              />
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
