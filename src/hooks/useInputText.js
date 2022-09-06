import { useCallback, useState } from 'react';

const inputValidate = (value, schema) => {
  if (schema?.validate(value)?.error) {
    const [details] = schema.validate(value).error.details;
    return details.message;
  }
  return '';
};

const useInputText = ({ initialStateText = '', validationSchema }) => {
  const [value, setValue] = useState(initialStateText);
  const [textError, setTextError] = useState('');

  const handleChange = useCallback(
    ({ target: { value } }) => {
      setValue(value);
      if (validationSchema) {
        setTextError(inputValidate(value, validationSchema));
      }
    },
    [value, textError],
  );

  const clearInput = useCallback(() => {
    setValue('');
    setTextError('');
  }, [value, textError]);

  return { value, handleChange, clearInput, textError, setValue };
};
export default useInputText;
