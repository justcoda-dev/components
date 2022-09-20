import { Form } from 'react-bootstrap';

const UploadInput = ({ label, onChange, value }) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        name='file'
        onChange={onChange}
        value={value}
        type='file' />
    </Form.Group>
  );
};
export default UploadInput;
