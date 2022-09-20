import { Form } from 'react-bootstrap';
import styled from 'styled-components';

// styledComponents
const FormGroup = styled(Form.Group)`
  display: flex;
  flex-direction: column`;

const FormLabel = styled(Form.Label)`
  align-self: flex-start;
`;
const FormText = styled(Form.Text)`
  height: 1rem;
  display: inline-block;
`;

// /styledComponents
const PasswordInput = ({ value, onChange, label, helpText, placeholder }) => {
  return (
    <FormGroup className='mb-3'>
      <FormLabel>{label}</FormLabel>
      <Form.Control
        value={value}
        onChange={onChange}
        type='password'
        placeholder={placeholder}
      />
      <FormText>
        {helpText}
      </FormText>
    </FormGroup>
  );
};
export default PasswordInput;
