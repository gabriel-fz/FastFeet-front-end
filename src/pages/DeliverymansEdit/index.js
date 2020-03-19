import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import api from '~/services/api';
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

export default function DeliveriesEdit({ match }) {
  const [deliverymanId] = useState(match.params.deliverymanId);
  const dispatch = useDispatch();
  const [dataDeliveryman, setDataDeliveryman] = useState({});

  useEffect(() => {
    async function loadDeliveryman() {
      const response = await api.get(`deliverymans/${deliverymanId}`);

      const { name, email, avatar_id } = response.data;
      const avatar_url = response.data.avatar.url;

      setDataDeliveryman({ name, email, avatar_id, avatar_url });
    }
    loadDeliveryman();
  }, [deliverymanId]);

  function handleSubmit() {}

  return (
    <Container>
      <Form initialData={dataDeliveryman} onSubmit={handleSubmit}>
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
          <AvatarInput
            name="avatar_id"
            dataAvatarId={dataDeliveryman.avatar_id}
            dataAvatarUrl={dataDeliveryman.avatar_url}
          />

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
