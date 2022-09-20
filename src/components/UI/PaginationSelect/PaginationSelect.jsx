import { Form } from 'react-bootstrap';

const PaginationSelect = ({ list, className, onChange }) => {
  return (
    <Form.Select onChange={onChange} className={className}>
      {list.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </Form.Select>
  );
};
export default PaginationSelect;
