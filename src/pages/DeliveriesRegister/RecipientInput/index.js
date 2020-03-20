import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import api from '~/services/api';
import { useField } from '@rocketseat/unform';

export default function RecipientInput({ ...res }) {
  const [recipients, setRecipients] = useState([]);
  const selectRef = useRef(null);
  const { registerField } = useField('recipient');

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      const data = response.data.map(recipient => ({
        value: recipient.id,
        label: recipient.name,
      }));

      setRecipients(data);
    }
    loadRecipients();
  }, []);

  useEffect(() => {
    registerField({
      name: 'recipient_id',
      ref: selectRef.current,
      path: 'select.state.value.value',
    });
  }, [selectRef, registerField]);

  const handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, '');
    return inputValue;
  };

  const filterRecipients = inputValue => {
    return recipients.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadRecipients = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterRecipients(inputValue));
    }, 100);
  };

  return (
    <label htmlFor="recipient">
      <AsyncSelect
        cacheOptions
        id="recipient"
        ref={selectRef}
        classNamePrefix="react-select"
        loadOptions={loadRecipients}
        onInputChange={handleInputChange}
        placeholder="Digite o nome do destinatário"
        noOptionsMessage={() => 'Nenhum destinatario encontrado'}
        {...res}
      />
    </label>
  );
}
