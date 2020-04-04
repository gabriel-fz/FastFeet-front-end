import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import HeaderForm from '~/components/HeaderForm';
import AvatarInput from '~/components/AvatarInput';

import { ContainerForm, Content, Row } from '~/styles/defaults';

export default function DeliveriesRegister() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit({ name, email, avatar_id }) {
    setLoading(true);
    try {
      await api.post('deliverymans', {
        name,
        email,
        avatar_id,
      });

      setLoading(false);
      toast.success('Entregador cadastrado com sucesso');
      history.push('/deliverymans');
    } catch (err) {
      setLoading(false);
      toast.error('Algo deu errado com o cadastro');
    }
  }

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit}>
        <HeaderForm
          name={'Cadastro de entregadores'}
          linkBack={'/deliverymans'}
          loading={loading}
        />

        <Content>
          <AvatarInput name="avatar_id" />

          <Row>
            <section>
              <label>Nome</label>
              <Input name="name" type="text" />
            </section>
          </Row>

          <Row>
            <section>
              <label>Email</label>
              <Input name="email" type="email" />
            </section>
          </Row>
        </Content>
      </Form>
    </ContainerForm>
  );
}
