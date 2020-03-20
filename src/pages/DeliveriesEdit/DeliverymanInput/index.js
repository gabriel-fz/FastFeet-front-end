import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import api from '~/services/api';
import { useField } from '@rocketseat/unform';

export default function RecipientInput({ ...rest }) {
  const [deliverymans, setDeliverymans] = useState([]);
  const selectRef = useRef(null);
  const { defaultValue, registerField } = useField('deliveryman');

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

  useEffect(() => {
    registerField({
      name: 'deliveryman_id',
      ref: selectRef.current,
      path: 'select.state.value.value',
    });
  }, [selectRef, registerField]);

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

  return (
    <label htmlFor="deliveryman">
      <AsyncSelect
        cacheOptions
        type="text"
        id="deliveryman"
        ref={selectRef}
        defaultValue={defaultValue}
        classNamePrefix="react-select"
        loadOptions={loadDeliverymans}
        onInputChange={handleInputChange}
        noOptionsMessage={() => 'Nenhum entregador encontrado'}
        {...rest}
      />
    </label>
  );
}
