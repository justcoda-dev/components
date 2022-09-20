import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.scss';
import Header from './components/Header/Header';
import { selectRefreshToken } from './store/selectors/userSelectors';
import { checkAuthAsync } from './store/thunks/userThunk';
import LayoutPage from './view/LayoutPage';
import LoginPage from './view/LoginPage';
import RegistrationPage from './view/RegistrationPage';
// styled components
const Application = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  position: relative;
  flex: 1;
`;

// /styled components
function App() {
  const isAuth = useSelector(selectRefreshToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthAsync());
    }
  }, []);

  return (
    <Application>
      <Header isAuth={isAuth} />
      <Content>
        {/*<Container>*/}
        <Routes>
          <Route path="/*" element={<LayoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
        {/*</Container>*/}
      </Content>
    </Application>
  );
}

export default App;
