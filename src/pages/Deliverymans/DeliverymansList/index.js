import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import api from '~/services/api';

import avatarUser from '~/assets/avatar-user.png';
import Actions from '~/components/Actions';
import ListDefault from 'components/ListDefault';
import HeaderList from 'components/HeaderList';
import FooterList from 'components/FooterList';

import { MdModeEdit, MdDeleteForever } from 'react-icons/md';
import { ContainerList } from '~/styles/defaults';

import { deliverymanUpdateRequest } from '~/store/modules/deliveryman/actions';

export default function DeliverymansList() {
  const dispatch = useDispatch();
  const [deliverymans, setDeliverymans] = useState([]);
  const [searchDeliverymans, setSearchDeliverymans] = useState();
  const [indexPage, setIndexPage] = useState(1);

  async function loadDeliverymans() {
    const response = await api.get('deliverymans', {
      params: { name: searchDeliverymans, page: indexPage },
    });

    const data = response.data.map(deliveryman => ({
      ...deliveryman,
      avatarUrl: deliveryman.avatar ? deliveryman.avatar.url : avatarUser,
    }));

    setDeliverymans(data);
  }

  useEffect(() => {
    loadDeliverymans();
  }, [searchDeliverymans, indexPage]);

  const lastIndexPage = useMemo(
    () => (deliverymans.length < 10 ? true : false),
    [deliverymans.length]
  );

  function handleEdit(deliveryman) {
    dispatch(deliverymanUpdateRequest(deliveryman));
  }

  async function handleDelete(id) {
    if (window.confirm('Deseja mesmo daletar o entregador?')) {
      try {
        await api.delete(`deliverymans/${id}`);

        toast.success('Entregador deletado com sucesso!');
        loadDeliverymans();
      } catch (err) {
        toast.error('Não foi possível deletar o entrego');
      }
    }
  }

  function handleSubmit({ search }) {
    setSearchDeliverymans(search);
  }

  return (
    <ContainerList>
      <strong>Gerenciando entregadores</strong>

      <HeaderList urlLink={'/entregadores/cadastrar'} onSubmit={handleSubmit} />

      <ListDefault>
        <thead>
          <tr>
            <th>ID</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymans.map(deliveryman => (
            <tr>
              <td>{deliveryman.id}</td>
              <td>
                <img src={deliveryman.avatarUrl} alt="" />
              </td>
              <td>{deliveryman.name}</td>
              <td>{deliveryman.email}</td>
              <td>
                <Actions>
                  <div>
                    <button
                      type="submit"
                      onClick={() => handleEdit(deliveryman)}
                    >
                      <MdModeEdit color="#4D85EE" size={15} /> Editar
                    </button>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={() => handleDelete(deliveryman.id)}
                    >
                      <MdDeleteForever color="#DE3B3B" size={15} /> Excluir
                    </button>
                  </div>
                </Actions>
              </td>
            </tr>
          ))}
        </tbody>
      </ListDefault>

      <FooterList
        index={indexPage}
        lastIndex={lastIndexPage}
        antClic={() => setIndexPage(indexPage - 1)}
        proxClic={() => setIndexPage(indexPage + 1)}
      />
    </ContainerList>
  );
}
