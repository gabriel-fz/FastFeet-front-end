import React from 'react';
import { useDispatch } from 'react-redux';
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

import { registerRequest } from '~/store/modules/delivery/actions';

import RecipientInput from './RecipientInput';
import DeliverymanInput from './DeliverymanInput';

export default function DeliveriesRegister() {
  const dispatch = useDispatch();

  function handleSubmit({ recipient_id, deliveryman_id, product }) {
    dispatch(registerRequest(recipient_id, deliveryman_id, product));
  }

  const customStyles = {
    singleValue: styles => {
      return {
        ...styles,
        margin: '15px 0px',
        color: '#999999',
      };
    },
    valueContainer: styles => {
      return {
        ...styles,
        height: '45px',
      };
    },
    control: styles => {
      return {
        ...styles,
        border: '1px solid #dddddd',
      };
    },
    indicatorSeparator: styles => {
      return {
        ...styles,
        background: '#fff',
      };
    },
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <EditHeader>
          <h2>Cadastro de encomendas</h2>

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
          <Row>
            <section>
              <label>Destinatário</label>
              <RecipientInput name="recipient_id" styles={customStyles} />
            </section>

            <section>
              <label>Entregador</label>
              <DeliverymanInput name="deliveryman_id" styles={customStyles} />
            </section>
          </Row>

          <Row>
            <section>
              <label>Nome do produto</label>
              <Input name="product" />
            </section>
          </Row>
        </Content>
      </Form>
    </Container>
  );
}
