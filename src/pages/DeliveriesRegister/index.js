import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import AsyncSelect from 'react-select/async';
import { Link } from 'react-router-dom';
import api from '~/services/api';

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

export default function DeliveriesRegister() {
  const dispatch = useDispatch();
  const [deliverymans, setDeliverymans] = useState([]);

  function handleSubmit({ recipient_id, deliveryman_id, product }) {
    dispatch(registerRequest(recipient_id, deliveryman_id, product));
  }

  useEffect(() => {
    async function loadDeliverymans() {
      const response = await api.get('deliverymans');

      const data = response.data.map(deliveryman => ({
        value: deliveryman.id,
        label: deliveryman.name,
      }));

      setDeliverymans(data);
    }
    loadDeliverymans();
  }, []);

  const handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, '');
    return inputValue;
  };

  const filterDeliverymans = inputValue => {
    return deliverymans.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadDeliverymans = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterDeliverymans(inputValue));
    }, 100);
  };

  const customStyles = {
    singleValue: styles => {
      return {
        ...styles,
        margin: '15px 0px',
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
              {/**
                <RecipientInput
                name="recipient_id"
                placeholder=""
                noOptionsMessage={() => 'Nenhum destinatario encontrado'}
                />
                */}
            </section>

            <section>
              <label>Entregador</label>
              <AsyncSelect
                label="deliveryman_id"
                id="deliveryman_id"
                name="deliveryman_id"
                styles={customStyles}
                loadOptions={loadDeliverymans}
                onInputChange={handleInputChange}
                noOptionsMessage={() => 'Nenhum entregador encontrado'}
                placeholder=""
              />
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
