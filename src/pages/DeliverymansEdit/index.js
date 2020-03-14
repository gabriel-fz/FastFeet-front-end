import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import AvatarInput from '~/components/AvatarInput';

import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

export default function DeliveriesEdit() {
  return (
    <Container>
      <Form>
        <EditHeader>
          <h2>Edição de entregadores</h2>

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
          <AvatarInput name="avatar_id" />

          <Row>
            <section>
              <label>Nome do produto</label>
              <Input name="password" type="text" />
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
