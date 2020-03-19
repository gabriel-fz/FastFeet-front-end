import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';

import { InputAvatar } from './styles';

import avatarInputDefault from '~/assets/adicionar-foto.png';

export default function AvatarInput(props) {
  const { registerField } = useField('avatar');

  const [file, setFile] = useState(props.dataAvatarId && props.dataAvatarId);
  const [preview, setPreview] = useState(
    props.dataAvatarUrl && props.dataAvatarUrl
  );

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <InputAvatar htmlFor="avatar">
      <img src={preview || avatarInputDefault} alt="" />

      <input
        type="file"
        id="avatar"
        accept="image/*"
        data-file={file}
        onChange={handleChange}
        ref={ref}
      />
    </InputAvatar>
  );
}
