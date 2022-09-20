import classNames from 'classnames';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import { useState } from 'react';
//styledComponents
const FormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormLabel = styled(Form.Label)`
  align-self: flex-start;
`;

const FormText = styled(Form.Text)`
  height: 1rem;
  display: inline-block;
`;
// /styledComponents
const TextInputControlled = ({
                               onChange,
                               value,
                               label,
                               placeholder,
                               helpText,
                               type,
                             }) => {

  return (
    <FormGroup>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <Form.Control
        type={type || 'text'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {helpText === '' ? <FormText>{helpText}</FormText> : null}
    </FormGroup>
  );
};
export default TextInputControlled;
