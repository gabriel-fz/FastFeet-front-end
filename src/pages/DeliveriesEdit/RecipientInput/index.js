import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import api from '~/services/api';
import { useField } from '@rocketseat/unform';

import PropTypes from 'prop-types';

export default function RecipientInput({ name, valueId, ...rest }) {
  const [recipients, setRecipients] = useState([]);
  const selectRef = useRef(null);
  const { fieldName, registerField } = useField(name);

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
      name: 'fieldName',
      ref: selectRef.current,
      path: 'select.state.value.value',
      getValue: ref => {
        if (!ref.select.state.value) {
          return '';
        }
        return ref.select.state.value.value;
      },
      clearValue(ref) {
        ref.select.select.clearValue();
      },
      setValue(ref, value) {
        ref.select.select.setValue(value);
      },
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
    <label htmlFor={fieldName}>
      <AsyncSelect
        name={fieldName}
        aria-label={fieldName}
        ref={selectRef}
        classNamePrefix="react-select"
        loadOptions={loadRecipients}
        onInputChange={handleInputChange}
        {...rest}
      />
    </label>
  );
}

RecipientInput.propTypes = {
  name: PropTypes.string.isRequired,
};
