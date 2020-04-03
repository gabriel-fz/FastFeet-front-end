import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdChevronLeft, MdCheck, MdRotateRight } from 'react-icons/md';

import history from '~/services/history';
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
    <Container>
      <Form onSubmit={handleSubmit}>
        <EditHeader>
          <h2>Cadastro de encomendas</h2>

          <div>
            <Link to="/deliveries">
              <MdChevronLeft color="#FFFFFF" size={20} />
              VOLTAR
            </Link>

            <ButtonSave loading={loading}>
              {loading ? (
                <MdRotateRight color="#FFF" size={20} />
              ) : (
                <>
                  <MdCheck color="#FFFFFF" size={20} />
                  SALVAR
                </>
              )}
            </ButtonSave>
          </div>
        </EditHeader>

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
    </Container>
  );
}
