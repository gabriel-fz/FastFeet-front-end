import React from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck, MdRotateRight } from 'react-icons/md';
import PropTypes from 'prop-types';

import { HeaderF, ButtonSave } from './styles';

export default function HeaderForm({ name, linkBack, loading }) {
  return (
    <HeaderF>
      <h2>{name}</h2>

      <div>
        <Link to={linkBack}>
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
    </HeaderF>
  );
}

HeaderForm.propTypes = {
  name: PropTypes.string.isRequired,
  linkBack: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
};
