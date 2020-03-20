import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import { deliverymanUpdate } from '~/store/modules/deliveryman/actions';

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
  const dispatch = useDispatch();
  const dataDeliveryman = useSelector(state => state.deliveryman.data);

  function handleSubmit(data) {
    const deliveryman = Object.assign(
      { data: data },
      { id: dataDeliveryman.id }
    );

    dispatch(deliverymanUpdate(deliveryman));
  }

  return (
    <Container>
      <Form initialData={dataDeliveryman} onSubmit={handleSubmit}>
        <EditHeader>
          <h2>Edição de entregador</h2>

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
