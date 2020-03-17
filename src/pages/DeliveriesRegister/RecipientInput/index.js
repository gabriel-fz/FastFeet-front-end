import React, { useRef, useEffect, useState } from 'react';
import AsyncSelect from 'react-select/async';
import api from '~/services/api';
import { useField } from '@unform/core';

import PropTypes from 'prop-types';

export default function RecipientInput({ name, ...rest }) {
  const [recipients, setRecipients] = useState([]);
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

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
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map(option => option.value);
        } else {
          if (!ref.select.state.value) {
            return '';
          }
          return ref.select.state.value.value;
        }
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

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
    <AsyncSelect
      cacheOptions
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      loadOptions={loadRecipients}
      onInputChange={handleInputChange}
      styles={customStyles}
      {...rest}
    />
  );
}

RecipientInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};
