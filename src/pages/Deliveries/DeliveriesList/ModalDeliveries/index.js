import React from 'react';
import { parseISO, format } from 'date-fns';
import PropTypes from 'prop-types';

import ModalDefault from '~/components/ModalDefault';

import { Infos, Title, ContainerImage } from './styles';

export default function ModalDeliveries({ data, ...rest }) {
  return (
    <ModalDefault {...rest}>
      <Title>Informações da retirada</Title>
      <Infos>
        <p>{`${data.recipient.address}, nº ${data.recipient.address_number}`}</p>
        <p>{`${data.recipient.city} - ${data.recipient.state}`}</p>
        <p>{data.recipient.zip_code}</p>
      </Infos>

      <Title>Datas</Title>
      <Infos>
        <p>
          <strong>Retirada:</strong>{' '}
          {data.start_date
            ? format(parseISO(data.start_date), 'dd/MM/YYY')
            : 'A encomenda ainda não foi retirada'}
        </p>
        <p>
          <strong>Entrega:</strong>{' '}
          {data.end_date
            ? format(parseISO(data.end_date), 'dd/MM/YYY')
            : 'A encomenda ainda não foi entregue'}
        </p>
      </Infos>

      {data.signature ? (
        <>
          <Title>Assinatura do destinatário</Title>
          <ContainerImage>
            <img src={data.signature.url} alt="" width="235px" />
          </ContainerImage>
        </>
      ) : (
        ''
      )}
    </ModalDefault>
  );
}

ModalDeliveries.propTypes = {
  data: PropTypes.object.isRequired,
};
