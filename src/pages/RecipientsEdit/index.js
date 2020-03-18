import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import api from '~/services/api';
import { Link } from 'react-router-dom';

import { recipientUpdate } from '~/store/modules/recipient/actions';

import { MdChevronLeft, MdCheck } from 'react-icons/md';

import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

export default function RecipientsEdit({ match }) {
  const dispatch = useDispatch();
  const [recipientId] = useState(match.params.recipientId);
  const [dataRecipient, setDataRecipient] = useState();

  useEffect(() => {
    async function loadRecipient() {
      const response = await api.get(`recipients/${recipientId}`);

      setDataRecipient(response.data);
    }
    loadRecipient();
  }, [recipientId]);

  function handleSubmit(data) {
    const recipient = Object.assign({ data: data }, { id: recipientId });
    dispatch(recipientUpdate(recipient));
  }

  return (
    <Container>
      <Form initialData={dataRecipient} onSubmit={handleSubmit}>
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
