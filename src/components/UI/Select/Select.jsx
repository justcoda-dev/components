import Form from 'react-bootstrap/Form';

const Select = ({ onChange, optionsList }) => {

    return (
      <Form.Select onChange={onChange} aria-label={'title'}>
        <option>Open this select menu</option>
        {optionsList ? optionsList.map((option) => (
          <option key={option.uuid} value={option.category}>
            {option.category}
          </option>
        )) : null}
      </Form.Select>
    );
  }
;
export default Select;
