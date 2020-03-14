import React from 'react';

import { InputAvatar } from './styles';

import avatar from '~/assets/adicionar-foto.png';

export default function AvatarInput() {
  return (
    <InputAvatar htmlFor="avatar">
      <img src={avatar} alt="" />

      <input type="file" id="avatar" accept="image/*" />
    </InputAvatar>
  );
}
