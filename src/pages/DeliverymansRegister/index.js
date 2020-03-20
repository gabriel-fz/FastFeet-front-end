import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import AvatarInput from '~/components/AvatarInput';

import { deliverymanRegister } from '~/store/modules/deliveryman/actions';

import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .email()
    .required('Email obrigatório'),
});

export default function DeliveriesRegister() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, avatar_id }) {
    dispatch(deliverymanRegister(name, email, avatar_id));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <EditHeader>
          <h2>Cadastro de entregadores</h2>

          <div>
            <Link to="/deliverymans">
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
