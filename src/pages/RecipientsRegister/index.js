import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

export default function RecipientsRegister() {
  return (
    <Container>
      <Form>
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
              <Input name="rua" type="text" size={55} />
            </section>

            <section>
              <label>Número</label>
              <Input name="numero" type="text" size={10} />
            </section>

            <section>
              <label>Complemento</label>
              <Input name="complemento" type="text" size={10} />
            </section>
          </Row>

          <Row>
            <section>
              <label>Cidade</label>
              <Input name="cidade" type="text" />
            </section>

            <section>
              <label>Estado</label>
              <Input name="estado" type="text" />
            </section>

            <section>
              <label>CEP</label>
              <Input name="cep" type="text" />
            </section>
          </Row>
        </Content>
      </Form>
    </Container>
  );
}
