import { Form } from 'react-bootstrap';
import styled from 'styled-components';
//styledComponents
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
const TextInput = ({
                     onChange,
                     value,
                     label,
                     placeholder,
                     parentClass,
                     helpText,
                   }) => {
  return (
    <FormGroup
      className='mb-3'
    >
      <FormLabel>{label}</FormLabel>
      <Form.Control
        type='text'
        value={value || ''}
        onChange={onChange}
        placeholder={placeholder}
      />
      <FormText>
        {helpText}
      </FormText>
    </FormGroup>
  );
};
export default TextInput;
