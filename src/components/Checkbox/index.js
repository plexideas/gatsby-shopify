import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { CheckBoxWrapper } from './styles';

export function Checkbox({ checked }) {
  return (
    <CheckBoxWrapper checked={checked}>
      <div>
        <FaCheck color="white" />
      </div>
    </CheckBoxWrapper>
  );
}
