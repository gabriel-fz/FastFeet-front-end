import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { recipientRegister } from '~/store/modules/recipient/actions';

import { MdChevronLeft, MdCheck } from 'react-icons/md';
import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  address: Yup.string().required('Endereço obrigatório'),
  address_number: Yup.string('Número obrigatório').required(
    'Número obrigatório'
  ),
  complement: Yup.string().required('Complemento obrigatório'),
  state: Yup.string().required('Estado obrigatório'),
  city: Yup.string().required('Cidade obrigatório'),
  zip_code: Yup.string().required('CEP obrigatório'),
});

export default function RecipientsRegister() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(recipientRegister(data));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
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
