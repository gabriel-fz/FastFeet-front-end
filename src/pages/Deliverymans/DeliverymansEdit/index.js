import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import api from '~/services/api';

import { MdChevronLeft, MdCheck, MdRotateRight } from 'react-icons/md';
import AvatarInput from '~/components/AvatarInput';
import {
  Container,
  Content,
  Row,
  ButtonSave,
  EditHeader,
} from '~/styles/registerDefault';

export default function DeliveriesEdit() {
  const dataDeliveryman = useSelector(state => state.deliveryman.data);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);
    try {
      await api.put(`deliverymans/${dataDeliveryman.id}`, data);

      setLoading(false);
      toast.success('Entregador atualizado com sucesso!');
    } catch (err) {
      setLoading(false);
      toast.error('Não foi possível atualizar o entregador');
    }
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

            <ButtonSave loading={loading}>
              {loading ? (
                <MdRotateRight color="#FFF" size={20} />
              ) : (
                <>
                  <MdCheck color="#FFFFFF" size={20} />
                  SALVAR
                </>
              )}
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
