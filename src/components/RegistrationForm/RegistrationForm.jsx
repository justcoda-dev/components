import { useCallback, useMemo, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useInputText from '../../hooks/useInputText';
import { registrationAsync } from '../../store/thunks/userThunk';
import Button from '../UI/Button/Button';
import PasswordInput from '../UI/PasswordInput/PasswordInput';
import TextInput from '../UI/TextInput/TextInput';
import UploadInput from '../UI/UploadInput/UploadInput';
import useUpload from '../UI/UploadInput/useUpload';
import { emailSchema, passwordSchema, stringSchema } from './validation';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const {
    value: email,
    textError: emailError,
    handleChange: emailHandleInput,
    clearInput: emailClear,
  } = useInputText({ validationSchema: emailSchema });
  const {
    value: password,
    textError: passwordError,
    handleChange: passwordHandleInput,
    clearInput: passwordClear,
  } = useInputText({ validationSchema: passwordSchema });
  const {
    value: firstName,
    textError: firstNameError,
    handleChange: firstNameHandleInput,
    clearInput: firstNameClear,
  } = useInputText({ validationSchema: stringSchema });
  const {
    value: lastName,
    textError: lastNameError,
    handleChange: lastNameHandleInput,
    clearInput: lastNameClear,
  } = useInputText({ validationSchema: stringSchema });

  const { image: fileImage, onChangeHandle } = useUpload();

  const [checkbox, setCheckbox] = useState(false);

  const checkboxHandle = useCallback(() => setCheckbox(!checkbox), [checkbox]);
  const submitButtonHandle = useCallback(
    async (event) => {
      event.preventDefault();
      dispatch(
        registrationAsync({
          password,
          email,
          firstName,
          lastName,
          fileImage,
        }),
      );
      clearInputs();
    },
    [password, email, firstName, lastName, fileImage],
  );

  const disabled = useMemo(
    () => checkbox && !!email && !!password && !!firstName && !!lastName,

    [checkbox, email, password, firstName, lastName],
  );

  const clearInputs = () => {
    emailClear();
    passwordClear();
    firstNameClear();
    lastNameClear();
  };
  return (
    <Form action="submit" onSubmit={submitButtonHandle}>
      <Container>
        <TextInput
          label="Email"
          placeholder="Enter email"
          value={email}
          onChange={emailHandleInput}
          helpText={emailError}
        />
        <TextInput
          label="First name"
          placeholder="Enter first name"
          value={firstName}
          onChange={firstNameHandleInput}
          helpText={firstNameError}
        />
        <TextInput
          label="Last name"
          placeholder="Enter last name"
          value={lastName}
          onChange={lastNameHandleInput}
          helpText={lastNameError}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={passwordHandleInput}
          helpText={passwordError}
        />
        <UploadInput onChange={onChangeHandle} label="image" />

        <Form.Check
          onChange={checkboxHandle}
          type="checkbox"
          inline
          label="are you agree with me ?"
        />
        <Button type="submit" disabled={!disabled}>
          Confirm
        </Button>
      </Container>
    </Form>
  );
};
export default RegistrationForm;
