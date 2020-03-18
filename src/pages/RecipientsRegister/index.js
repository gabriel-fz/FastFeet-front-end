import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import { recipientRegister } from '~/store/modules/recipient/actions';

import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

export default function RecipientsRegister() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(recipientRegister(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <EditHeader>
          <h2>Cadastro de destinatário</h2>

          <div>
            <Link to="/recipients">
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
              <label>Nome</label>
              <Input name="name" type="text" />
            </section>
          </Row>

          <Row>
            <section>
              <label>Rua</label>
              <Input name="address" type="text" size={55} />
            </section>

            <section>
              <label>Número</label>
              <Input name="address_number" type="text" size={10} />
            </section>

            <section>
              <label>Complemento</label>
              <Input name="complement" type="text" size={10} />
            </section>
          </Row>

          <Row>
            <section>
              <label>Cidade</label>
              <Input name="city" type="text" />
            </section>

            <section>
              <label>Estado</label>
              <Input name="state" type="text" />
            </section>

            <section>
              <label>CEP</label>
              <Input name="zip_code" type="text" />
            </section>
          </Row>
        </Content>
      </Form>
    </Container>
  );
}
