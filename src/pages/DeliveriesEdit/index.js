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

export default function DeliveriesEdit() {
  return (
    <Container>
      <Form>
        <EditHeader>
          <h2>Edição de encomendas</h2>

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
          <Row>
            <section>
              <label>Destinatário</label>
              <Input list="teste" name="destinatario" />
              <datalist id="teste">
                <option value="teste 1" />
                <option value="teste 1" />
                <option value="teste 1" />
                <option value="teste 1" />
              </datalist>
            </section>

            <section>
              <label>Entregador</label>
              <Input name="password" type="list" placeholder="Teste" />
            </section>
          </Row>

          <Row>
            <section>
              <label>Nome do produto</label>
              <Input name="password" type="list" placeholder="Teste" />
            </section>
          </Row>
        </Content>
      </Form>
    </Container>
  );
}
