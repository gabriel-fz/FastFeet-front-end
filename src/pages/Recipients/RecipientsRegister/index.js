import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '~/services/history';
import api from '~/services/api';

import HeaderForm from '~/components/HeaderForm';

import { ContainerForm, Content, Row } from '~/styles/defaults';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  address: Yup.string().required('Endereço obrigatório'),
  address_number: Yup.string('Número obrigatório').required(
    'Número obrigatório'
  ),
  complement: Yup.string().required('Complemento obrigatório'),
  state: Yup.string().required('Estado obrigatório'),
  city: Yup.string().required('Cidade obrigatório'),
  zip_code: Yup.string()
    .length(9, 'Digite o CEP com hífen')
    .required('CEP obrigatório'),
});

export default function RecipientsRegister() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);
    try {
      await api.post('recipients', data);

      setLoading(false);
      toast.success('Destinatário cadastrado com sucesso!');
      history.push('/destinatarios');
    } catch (err) {
      setLoading(false);
      toast.error('Algo deu errado com o cadastro');
    }
  }

  return (
    <ContainerForm>
      <Form schema={schema} onSubmit={handleSubmit}>
        <HeaderForm
          name={'Cadastro de destinatário'}
          linkBack={'/destinatarios'}
          loading={loading}
        />

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
    </ContainerForm>
  );
}
