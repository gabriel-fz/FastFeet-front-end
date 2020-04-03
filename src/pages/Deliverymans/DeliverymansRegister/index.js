import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdChevronLeft, MdCheck, MdRotateRight } from 'react-icons/md';

import history from '~/services/history';
import api from '~/services/api';

import AvatarInput from '~/components/AvatarInput';

import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

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
    <Container>
      <Form onSubmit={handleSubmit}>
        <EditHeader>
          <h2>Cadastro de entregadores</h2>

          <div>
            <Link to="/deliverymans">
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
    </Container>
  );
}
