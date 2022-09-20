import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm/LoginForm';

import { selectRefreshToken } from '../store/selectors/userSelectors';
// styled components
const LoginWrapper = styled.div``;
// /styled components
const LoginPage = () => {
  const isToken = useSelector(selectRefreshToken);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (isToken) {
      navigate(location.state || '/');
    }
  }, [isToken]);

  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
  );
};
export default LoginPage;
