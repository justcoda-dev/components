import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import useInputText from '../../hooks/useInputText';
import { loginAsync } from '../../store/thunks/userThunk';
import Button from '../UI/Button/Button';
import PasswordInput from '../UI/PasswordInput/PasswordInput';
import TextInput from '../UI/TextInput/TextInput';
import { emailSchema, passwordSchema } from './validation';
// styled components
const Form = styled.form`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  align-self: center;
`;
const InputsWrapper = styled.div``;
const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
// /styled components
const LoginForm = () => {
  const {
    value: emailValue,
    handleChange: emailInputHandle,
    textError: emailError,
    clearInput: emailValueClear,
  } = useInputText({ initialStateText: '', validationSchema: emailSchema });

  const {
    value: passwordValue,
    handleChange: passwordInputHandle,
    textError: passwordError,
    clearInput: passwordValueClear,
  } = useInputText({ initialStateText: '', validationSchema: passwordSchema });

  const dispatch = useDispatch();

  const submitButtonHandle = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(loginAsync({ email: emailValue, password: passwordValue }));
      emailValueClear();
      passwordValueClear();
    },
    [passwordValue, emailValue],
  );

  const disabled = useMemo(
    () => !emailError && !passwordError && !!emailValue && !!passwordValue,
    [passwordValue, emailValue, emailError, passwordError],
  );
  return (
    <Form action="submit" onSubmit={submitButtonHandle}>
      <Title>Login</Title>
      <InputsWrapper>
        <TextInput
          label="Email"
          placeholder="Enter email"
          helpText={emailError}
          value={emailValue}
          onChange={emailInputHandle}
        />
        <PasswordInput
          label="Password"
          placeholder="Enter password"
          helpText={passwordError}
          value={passwordValue}
          onChange={passwordInputHandle}
        />
      </InputsWrapper>
      <ButtonsWrapper>
        <Button disabled={!disabled} type="submit">
          Submit
        </Button>
        <NavLink to="/registration">registration</NavLink>
      </ButtonsWrapper>
    </Form>
  );
};
export default LoginForm;
